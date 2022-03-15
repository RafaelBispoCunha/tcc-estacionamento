import React, { useCallback } from 'react';
import { observer } from 'mobx-react';
import { Breadcrumb, Spin } from 'antd';
import EntradaForm from './EntradaForm';
import { useStoreContext } from '../../store/'
import { useState } from 'react';
import { IVeiculo } from '../../model/models';
import { IEntrada } from './../../model/models';

const EntradaPage: React.FC = observer(() => {

  const { entradaStore, veiculoStore } = useStoreContext();
  const [veiculoData, setVeiculoData] = useState<IVeiculo>()
  const [load, setLoad] = useState(false);

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

    entradaStore.postEntrada(newData).then(e=>{
      setLoad(false)
    }).catch(e =>{

    })

  }

  const onSearchVehicle = useCallback((value: any) => {
    veiculoStore.getVeiculo(value)
      .then(e => {
        setVeiculoData(veiculoStore.veiculo)
      }).catch(e => {

      })
    
  }, [veiculoStore, setVeiculoData]);

  return (
    <div>
      <Spin spinning={load}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item><p>Entrada</p></Breadcrumb.Item>
        </Breadcrumb>

        <EntradaForm
          onSubmit={onSubmit}
          onSearchVehicle={onSearchVehicle}
          veiculo={veiculoData}
        />
      </Spin>
    </div>
  )
})

export default EntradaPage;