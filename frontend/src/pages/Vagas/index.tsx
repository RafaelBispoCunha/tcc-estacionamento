import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import VagaForm from './VagaForm'
import VagaTable from './VagaTable'
import { IVaga  }from '../../model/models'
import VagaService from '../../services/VagaService';

const VagaPage = () => {

  const [vagas, setVagas] = useState<IVaga[] | undefined>(undefined)
  const [isForm, setIsForm] = useState(false);
  const [operation, setOperation] = useState('CREATE')

  useEffect(() => {
    VagaService.getAll().then(response => {
      setVagas(response.data)
    })
    if(vagas?.length === 0) setIsForm(true)
  }, [vagas, VagaService])

  const onSubmit = (values: any) => {

    if (operation === 'CREATE') {
      VagaService.create(values).then(response => {
        VagaService.getAll().then(response => {
          setVagas(response.data);

        })
        setIsForm(false)
      }).catch(e => {
        console.log(e)
        setVagas(undefined);
      })
    } else {
      VagaService.update(values).then(response => {
        VagaService.getAll().then(response => {
          setVagas(response.data);

        })
        setIsForm(false)
        setOperation('CREATE')
      }).catch(e => {
        setVagas(undefined);
      })
    }
  }

  const onDelete = (values: any) => {
    VagaService.delete(values).then(response => {
      console.log(response.data);
      setIsForm(false);
      VagaService.getAll().then(response => {
        setVagas(response.data);
        setOperation('CREATE');
      })
    }).catch(e => {
      setVagas(undefined);
    })
  }

  const onAlter = (values: any) => {
    setOperation('UPDATE');
    VagaService.findById(values).then(response => {
      setIsForm(true);
      setVagas(response.data);
    }).catch(e => {
      setVagas(undefined);
    })
  }

  const form = isForm ?
    <VagaForm
      onSubmit={onSubmit}
      operation={operation}
      defaultValues={vagas}
      isForm={() => setIsForm(true)}
    />
    : <VagaTable
      data={vagas}
      onDelete={onDelete}
      onAlter={onAlter}
    />

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item >
        <a onClick={() => {
          setIsForm(false);
          setOperation('CREATE')
        }}
        >Vagas</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item><a onClick={() => setIsForm(true)}>Nova Vaga</a></Breadcrumb.Item>
      </Breadcrumb>
      {form}

    </>
  )
}

export default VagaPage;