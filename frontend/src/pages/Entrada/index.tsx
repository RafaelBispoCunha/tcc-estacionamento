import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Breadcrumb } from 'antd';
import EntradaForm from './EntradaForm';
import EntradaTable from './EntradaTable';
import { IVeiculo } from '../../model/models'
import VeiculoService from '../../services/VeiculoService';
import { useStoreContext } from '../../store/'

const EntradaPage: React.FC = observer(() => {

  const { entradaStore } = useStoreContext();

  const [isForm, setIsForm] = useState(false);
  const [veiculo, setVeiculo] = useState<IVeiculo | undefined>(undefined)


  useEffect(() => {
    entradaStore.getEntradas()
    
  }, [entradaStore]);

  const onSubmit = (values: any) => {
    const newData = {
      placa: values.placa,
      modelo: values.modelo,
      marca: values.marca,
      andar: 0,
      numeroVaga: 2
    }
    VeiculoService.create(newData)
    VeiculoService.getAll().then(response => {
      
    }).catch(e => {
      console.log(e)
      
    })
  }

  const onSearchVehicle = (value: any) => {

    console.log(value)
    VeiculoService.get(value).then(response => {
      console.log(response)
      if (response.data) setVeiculo(response.data);


    }).catch(e => {
      console.log(e)
      
    })
  };


  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><a href="entrada">Veiculos Estacionados</a></Breadcrumb.Item>
        <Breadcrumb.Item><span onClick={() => setIsForm(true)}>Nova Entrada</span></Breadcrumb.Item>
      </Breadcrumb>



      {/*  <VagaTable data={data}/>*/}

      {isForm ?
        <EntradaForm
          onSubmit={onSubmit}
          data={[]}
          onSearchVehicle={onSearchVehicle}
          veiculo={veiculo}
        />
        : <EntradaTable
          data={entradaStore.entradas}
        />}

    </div>
  )
})

export default EntradaPage;