import React, { useState, useEffect } from 'react';
import { Breadcrumb, Spin, message } from 'antd';
import SaidaTable from './SaidaTable';
import { IEntrada } from '../../model/models'
import { useStoreContext } from '../../store/'

const SaidaPage = () => {

  const { entradaStore, saidaStore } = useStoreContext();
  const [visible, setVisible] = useState(false);
  const [entradas, setEntradas] = useState<IEntrada[] | undefined>(undefined)
  const [entrada, setEntrada] = useState<IEntrada | undefined>(undefined)
  const [load, setLoad] = useState(false);

  useEffect(() => {
    entradaStore.getEntradas()
      .then(e => {
        setEntradas(entradaStore.entradas)
      })
  }, [entradaStore, setEntradas])

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const searchData = () => {
    entradaStore.getEntradas()
      .then(e => {
        setEntradas(entradaStore.entradas)
      })
  }

  const onSubmit = (values: IEntrada) => {
    setLoad(true)

    saidaStore.postSaida(values)
      .then(e => {
        setVisible(!visible)
        entradaStore.deleteEntrada(values.id)
        searchData()
       // message.success('This is a success message');
      })
      .catch((response => {
        message.error('This is an error message');
      }))
    setLoad(false)
  }

  const onSelectedRow = (value: any) => {

    setEntrada(value)
    setVisible(!visible)
  
  }

  const showModal = (value: any) => {
    setVisible(!visible)
  }

  return (
    <>
      <Spin spinning={load}>
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
      </Spin>
    </>
  )
}

export default SaidaPage;