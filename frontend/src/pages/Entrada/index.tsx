import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Breadcrumb, Spin, message } from 'antd';
import EntradaForm from './EntradaForm';
import { useStoreContext } from '../../store/'
import { useState, useEffect } from 'react';
import { IVeiculo } from '../../model/models';
import { IEntrada } from './../../model/models';
import { Form, Input } from 'antd';

const EntradaPage: React.FC = observer(() => {

  const { entradaStore, veiculoStore } = useStoreContext();
  const [veiculoData, setVeiculoData] = useState<IVeiculo>()
  const [load, setLoad] = useState(false);
  const [form] = Form.useForm();
  const { Search } = Input;

  useEffect(() => {
    return veiculoStore.clean()
  }, [veiculoStore])

  const onSubmit = (values: any) => {
    setLoad(true)
    const newData = {
      dataHoraEntrada: '01-01-2022',
      usuario: 'João',
      nomeCondutor: values.nomeCondutor,
      veiculo: {
        placa: values.placa,
        modelo: values.modelo,
        marca: values.marca,
        cor: values.cor,
        anoFabricacao: values.anoFabricacao,
        situacao: values.situacao,
      }
    } as IEntrada

    entradaStore.postEntrada(newData)
      .then((response) => {
        message.success('Entrada incluida com sucesso!');
        veiculoStore.clean()

        setLoad(false)
      })
      .catch((response) => {
        message.error('This is an error message', response);
      })
  }

  const onSearchVehicle = useCallback((value: any) => {
    veiculoStore.getVeiculo(value)
      .then((response) => {
        setVeiculoData(veiculoStore.veiculo[0])
        console.log(veiculoData)

      }).catch((response) => {

      })
    form.resetFields()
  }, [veiculoStore, setVeiculoData, veiculoData, form]);

  return (
    <div style={{ height: '150vh' }}>
      <Spin spinning={load}>

        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><p>Entrada</p></Breadcrumb.Item>
        </Breadcrumb>

        <Form
          form={form}
          layout="vertical"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSearchVehicle}
        >
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
            <Form.Item
              label="Buscar Veículo"
              style={{ marginRight: 20, width: 230 }}
              initialValue={''}
            >
              <Search
                placeholder="Informe a Placa..."
                allowClear
                size="middle"
                onSearch={onSearchVehicle}
                style={{ textTransform: 'uppercase' }}
                required

              />
            </Form.Item>


          </div>
        </Form>
        {veiculoStore.veiculo.length > 0 &&
          <EntradaForm
            onSubmit={onSubmit}
            defaultValues={veiculoStore.veiculo[0]}
          />
        }
      </Spin>
    </div>
  )
})

export default EntradaPage;