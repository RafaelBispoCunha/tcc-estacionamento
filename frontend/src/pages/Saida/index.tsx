import React, { useState, useEffect } from 'react';

import { Breadcrumb } from 'antd';
import SaidaTable from './SaidaTable';

import { IEntrada } from '../../model/models'
import { useStoreContext } from '../../store/'

const SaidaPage = () => {


  const { entradaStore, saidaStore } = useStoreContext();
  const [visible, setVisible] = useState(false);
  const [entradas, setEntradas] = useState<IEntrada[] | undefined>(undefined)
  const [entrada, setEntrada] = useState<IEntrada | undefined>(undefined)

  useEffect(() => {
    entradaStore.getEntradas()
      .then(e => {
        setEntradas(entradaStore.entradas)
      })
  }, [entradaStore])

  const onSubmit = (values: any) => {
    saidaStore.postSaida(values).then(e => {
      setVisible(!visible)
    })
    entradaStore.getEntradas()
      .then(e => {
        setEntradas(entradaStore.entradas)
      })
  }

  const onSelectedRow = (value: any) => {
    alert(value)
    entradaStore.getEntrada(value).then(e => {
      setEntrada(entradaStore.entrada)
      setVisible(!visible)
    })
  }

  const showModal = (value: any) => {
    setVisible(!visible)
  }

  return (
    <>
      <Breadcrumb style={{ marginBottom: 50 }}>
        <Breadcrumb.Item >Saida</Breadcrumb.Item>
      </Breadcrumb>

      <div>
        <SaidaTable
          data={entradas}
          onSelectedRow={onSelectedRow}
          selected={entrada}
          onSubmit={onSubmit}
          showModal={showModal}
          visible={visible}
        />
      </div>

    </>
  )
}

export default SaidaPage;