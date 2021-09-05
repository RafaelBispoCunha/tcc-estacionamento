import React, { useState, useEffect } from 'react';

import { Form, Table, Input, InputNumber, Tooltip, Modal, Button } from 'antd';
import { WalletOutlined } from '@ant-design/icons';
import { IEntrada } from '../../model/models'

interface TableHospedeProps {
  data?: IEntrada[];
  onSelectedRow: (value: string) => void;
  selected?: IEntrada;
  onSubmit: (value: any) => void
  showModal: (value: any) => void
  visible: boolean
}

const SaidaTable: React.FC<TableHospedeProps> = ({ data, onSelectedRow, selected, onSubmit, showModal, visible }) => {

  const [placa, setPlaca] = useState<string>('');
  const [dataSource, setDataSource] = useState<IEntrada[] | undefined>(undefined);

  const [form] = Form.useForm();

  useEffect(() => {
    setDataSource(data)
  }, [setDataSource, data])

  console.log('dataSource')
  console.log(dataSource)
  console.log(data)

  const onChange = (value: any) => {
    console.log('changed', value);
  }

  const buscarPlaca = (
    <div style={{ display: 'flex', flexDirection: 'row', width: 280, marginRight: -140, marginLeft: -10 }}>
      <label style={{ marginTop: 5 }}>Placa</label>
      <Input
        style={{ width: 170, marginLeft: 20, }}
        placeholder="Buscar placa.."
        value={placa}
        onChange={e => {
          const currValue = e.target.value;
          setPlaca(currValue.toUpperCase());
          const filteredData = data?.filter(entry =>
            entry.placa?.includes(currValue)
          );
          setDataSource(filteredData);
        }}

      />
    </div>
  );

  const columns = [
    {
      title: buscarPlaca,
      dataIndex: 'placa',
      render: (text: string, record: IEntrada) => {
        return record.placa

      }
    },
    {
      title: 'Modelo',
      dataIndex: 'modelo',
      render: (text: string) => <p>{text}</p>,
    },
    {
      title: 'Marca',
      dataIndex: 'marca',
    },
    {
      title: 'Andar',
      dataIndex: 'andar',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.vaga?.andar ? entrada.vaga?.andar : ''
        return value
      }
    },
    {
      title: 'N° Vaga',
      dataIndex: 'numeroVaga',
      render: (value: any, entrada: IEntrada, index: number) => {
        //return entrada.vaga?.numeroVaga ? entrada.vaga?.numeroVaga : ''
        return value
      }
    },
    {
      title: 'Data Hora da Entrada',
      dataIndex: 'dataHoraEntrada',
      with: '15%',
      render: (value: any) => value

    },
    {
      title: 'Usuário',
      dataIndex: 'usuario',
      render: (value: any) => value

    },
    {
      title: 'Pagamento',
      dataIndex: 'pagamento',
      render: (valeu: any, record: any) => {
        return (
          <>
            <Tooltip placement="top" title="Pagar">
              <Button type="primary" style={{ marginRight: 10 }} onClick={() => onSelectedRow(record.id)} ><WalletOutlined /></Button>
            </Tooltip>

          </>
        )
      }
    },
  ];
  return (
    <div>

      <Table
        columns={columns}
        dataSource={dataSource}
      />
      <Modal
        title="Pagamento"
        visible={visible}
        onCancel={showModal}
        footer={false}
      >
        <div style={{ height: 300 }}>
          <Form
            form={form}
            layout="vertical"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onSubmit}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ display: 'flex', flexDirection: 'row', width: '95%' }}>
                <Form.Item
                  label="Placa"
                  name="placa"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130, marginRight: 20 }}
                >
                  <Input disabled />
                </Form.Item>

                <Form.Item
                  label="Modelo"
                  name="modelo"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130, marginRight: 20 }}
                >
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="Marca"
                  name="marca"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130 }}
                >
                  <Input disabled />
                </Form.Item>
              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '95%' }}>
                <Form.Item
                  label="Andar"
                  name="andar"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130, marginRight: 20 }}
                >
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="N° Vaga"
                  name="numeroVaga"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130 }}
                >
                  <Input disabled />
                </Form.Item>

              </div>
              <div style={{ display: 'flex', flexDirection: 'row', width: '95%' }}>
                <Form.Item
                  label="Qtde. Parcela"
                  name="qtdeParcela"
                  style={{ width: 130, marginRight: 20 }}
                >
                  <InputNumber min={1} max={12} defaultValue={1} onChange={onChange} />
                </Form.Item>
                <Form.Item
                  label="Valor Parcela"
                  name="valorParcela"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130, marginRight: 20 }}
                >
                  <Input disabled />
                </Form.Item>
                <Form.Item
                  label="Valor Total"
                  name="valorTotal"
                  initialValue={selected?.id ? selected?.id : ''}
                  style={{ width: 130 }}

                >
                  <Input disabled />
                </Form.Item>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
                <Form.Item>
                  <Tooltip placement="top" title="Salvar">
                    <Button type="primary" htmlType="submit" >Salvar</Button>
                  </Tooltip>
                  <Tooltip placement="top" title="Cancelar">
                    <Button type="primary" style={{ marginLeft: 20 }} danger onClick={showModal}>Cancelar</Button>
                  </Tooltip>
                </Form.Item>
              </div>

            </div>
          </Form>
        </div>
      </Modal >

    </div >
  );

}
export default SaidaTable;