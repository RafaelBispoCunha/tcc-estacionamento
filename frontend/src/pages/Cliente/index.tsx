import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import ClienteForm from './ClienteForm';
import ClienteTable from './ClienteTable';
import { useStoreContext } from '../../store/'
import { ICliente } from '../../model/models'
import { ButtonLink } from './style'

const ClientePage = () => {
  const { clienteStore } = useStoreContext();


  const [cliente, setCliente] = useState<ICliente | undefined>(undefined)
  const [clientes, setClientes] = useState<ICliente[] | undefined>(undefined)
  const [isForm, setIsForm] = useState(false);
  const [operation, setOperation] = useState('CREATE')

  useEffect(() => {
   clienteStore.getClientes().then(e => {
      setClientes(clienteStore.clientes)
    })
  }, [clienteStore])

  const onSubmit = (values: any) => {

    if (operation === 'CREATE') {
      clienteStore.postCliente(values).then(response => {
         clienteStore.getClientes().then(response => {
          setClientes(clienteStore.clientes)
          setIsForm(false)
        })
      }).catch(e => {
        console.log(e)
        setClientes(undefined);
      })
    } else {
      clienteStore.putCliente(values).then(response => {
         clienteStore.getClientes().then(response => {
          setClientes(clienteStore.clientes)

        })
        setIsForm(false)
        setOperation('CREATE')
      }).catch(e => {
        setClientes(undefined);
      })
    }
  }

  const onDelete = (values: any) => {
   clienteStore.deleteCliente(values).then(response => {
      setIsForm(false);
      clienteStore.getClientes().then(response => {
        setClientes(clienteStore.clientes)
        setOperation('CREATE');
      })
    }).catch(e => {
      setClientes(undefined);
    })
  }

  const onAlter = (values: any) => {
    setOperation('UPDATE');
    clienteStore.getCliente(values).then(response => {
      setIsForm(true);
      setCliente(clienteStore.cliente);
    }).catch(e => {
      setClientes(undefined);
    })
  }

  const form = isForm ?
    <ClienteForm
      onSubmit={onSubmit}
      operation={operation}
      defaultValues={cliente}
    />
    : <ClienteTable
      data={clientes}
      onDelete={onDelete}
      onAlter={onAlter}
    />
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><ButtonLink type="link" onClick={() => setIsForm(false)}>Clientes</ButtonLink></Breadcrumb.Item>
        <Breadcrumb.Item><ButtonLink type="link" onClick={() => setIsForm(true)}>Novo Cliente</ButtonLink></Breadcrumb.Item>
      </Breadcrumb>
      {form}

    </>
  )
}

export default ClientePage;