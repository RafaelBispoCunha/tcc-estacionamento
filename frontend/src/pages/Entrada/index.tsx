import React, { useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Breadcrumb } from 'antd';
import EntradaForm from './EntradaForm';
import EntradaTable from './EntradaTable';
import { IVeiculo, IVaga, IEntrada } from '../../model/models'
import { useStoreContext } from '../../store/'

const EntradaPage: React.FC = observer(() => {

  const { entradaStore, veiculoStore, vagaStore } = useStoreContext();

  const [isForm, setIsForm] = useState(false);
  const [veiculo, setVeiculo] = useState<IVeiculo | undefined>(undefined)
  const [entradas, setEntradas] = useState<IEntrada[] | undefined>(undefined)
  const [vagas, setVagas] = useState<IVaga[] | undefined>(undefined)


  useEffect(() => {
    entradaStore.getEntradas().then(e => {
      setEntradas(entradaStore.entradas)
    })
    vagaStore.getVagas().then(e => {
      setVagas(vagaStore.vagas)

    })
  }, [entradaStore, vagaStore]);

  const onSubmit = (values: any) => {
    const newData = {
      placa: values.placa,
      modelo: values.modelo,
      marca: values.marca,
      andar: 0,
      numeroVaga: 2
    }
    entradaStore.postEntrada(newData)

    entradaStore.getEntradas().then(e => {
      setEntradas(entradaStore.entradas)

    }).catch(e => {
      console.log(e)

    })
  }

  const onSearchVehicle = (value: any) => {
    veiculoStore.getVeiculo(value).then(e => {
      setVeiculo(veiculoStore.veiculo)
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
          data={vagas}
          onSearchVehicle={onSearchVehicle}
          veiculo={veiculo}
        />
        : <EntradaTable
          data={entradas}
        />}

    </div>
  )
})

export default EntradaPage;