import React, { useState, useEffect } from 'react';
import { Breadcrumb, Button } from 'antd';
import VagaForm from './VagaForm'
import VagaTable from './VagaTable'
import { IVaga } from '../../model/models'
import { useStoreContext } from '../../store/'

const VagaPage = () => {

  const { vagaStore } = useStoreContext();

  const [vaga, setVaga] = useState<IVaga | undefined>(undefined)
  const [vagas, setVagas] = useState<IVaga[] | undefined>(undefined)
  const [isForm, setIsForm] = useState(false);
  const [operation, setOperation] = useState('CREATE')

  useEffect(() => {
    vagaStore.getVagas().then(e => {
      setVagas(vagaStore.vagas)
    })
  }, [vagaStore])

  const onSubmit = (values: any) => {

    if (operation === 'CREATE') {
      vagaStore.postVaga(values).then(response => {
        vagaStore.getVagas().then(response => {
          setVagas(vagaStore.vagas);
          setIsForm(false)
        })
      }).catch(e => {
        console.log(e)
        setVagas(undefined);
      })
    } else {
      vagaStore.putVaga(values).then(response => {
        vagaStore.getVagas().then(response => {
          setVagas(vagaStore.vagas);

        })
        setIsForm(false)
        setOperation('CREATE')
      }).catch(e => {
        setVagas(undefined);
      })
    }
  }

  const onDelete = (values: any) => {
    vagaStore.deleteVaga(values).then(response => {
      setIsForm(false);
      vagaStore.getVagas().then(response => {
        setVagas(vagaStore.vagas);
        setOperation('CREATE');
      })
    }).catch(e => {
      setVagas(undefined);
    })
  }

  const onAlter = (values: any) => {
    setOperation('UPDATE');
    vagaStore.getVaga(values).then(response => {
      setIsForm(true);
      setVaga(vagaStore.vaga);
    }).catch(e => {
      setVagas(undefined);
    })
  }

  const form = isForm ?
    <VagaForm
      onSubmit={onSubmit}
      operation={operation}
      defaultValues={vaga}
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
          <Button type="link" onClick={() => {
            setIsForm(false);
            setOperation('CREATE')
          }}
          >Vagas</Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item><Button type="link" onClick={() => setIsForm(true)} style={{ color: "black" }}>Nova Vaga</Button></Breadcrumb.Item>
      </Breadcrumb>
      {form}
    </>
  )
}

export default VagaPage;