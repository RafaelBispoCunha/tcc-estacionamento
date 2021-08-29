import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import EntradaForm from './EntradaForm';
import EntradaTable from './EntradaTable';
import { IVaga, IVeiculo } from '../../model/models'
import VagaService from '../../services/VagaService';
import VeiculoService from '../../services/VeiculoService';

const EntradaPage = () => {

  const [data, setData] = useState<IVaga[] | undefined>(undefined)
  const [isForm, setIsForm] = useState(false);
  const [veiculo, setVeiculo] = useState<IVeiculo| undefined>(undefined)
  const [estacionados, setEstacionados] = useState<any[] | undefined>(undefined)

  useEffect(() => {
    VagaService.getAll().then(response => {
      setData(response.data);
    }).catch(e => {
      setData(undefined);
    })

    VeiculoService.getAll().then(response => {
      setEstacionados(response.data);
    }).catch(e => {
      console.log(e)
      setEstacionados(undefined);
    })
  },[VagaService,VeiculoService ]);

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
      setEstacionados(response.data);
    }).catch(e => {
      console.log(e)
      setEstacionados(undefined);
    })
  }

  const onSearchVehicle = (value: any) => {

    console.log(value)
    VeiculoService.get(value).then(response => {
      console.log(response)
      if(response.data) setVeiculo(response.data[0]);
      

    }).catch(e => {
      console.log(e)
      setVeiculo(undefined);
    })
  };


  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><a href="entrada">Veiculos Estacionados</a></Breadcrumb.Item>
        <Breadcrumb.Item><a onClick={() => setIsForm(true)}>Nova Entrada</a></Breadcrumb.Item>
      </Breadcrumb>



      {/*  <VagaTable data={data}/>*/}

      {isForm ? 
      <EntradaForm 
        onSubmit={onSubmit} 
        data={data} 
        onSearchVehicle={onSearchVehicle} 
        veiculo={veiculo} 
      />
        : <EntradaTable 
          data={estacionados} 
        />}

    </div>
  )
}

export default EntradaPage;