import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import UsuarioForm from './UsuarioForm';
import UsuarioTable from './UsuarioTable';
import { useStoreContext } from '../../store/'
import { IUsuario } from '../../model/models'
import { ButtonLink } from './style'

const UsuarioPage = () => {

  const { usuarioStore } = useStoreContext();
  const [usuarios, setUsuarios] = useState<IUsuario[] | undefined>(undefined)
  const [isForm, setIsForm] = useState(false);
  const [operation, setOperation] = useState('CREATE')

  useEffect(() => {
    usuarioStore.getUsuarios().then(e => {
      setUsuarios(usuarioStore.usuarios)
    })
  }, [usuarioStore, setUsuarios])

  const onSubmit = (values: any) => {

    if (operation === 'CREATE') {
      usuarioStore.postUsuario(values).then(response => {
        usuarioStore.getUsuarios().then(response => {
          setUsuarios(usuarioStore.usuarios)
          setIsForm(false)
        })
      }).catch(e => {
        console.log(e)
        setUsuarios(undefined);
      })
    } else {
      usuarioStore.putUsuario(values).then(response => {
        usuarioStore.getUsuarios().then(response => {
          setUsuarios(usuarioStore.usuarios)

        })
        setIsForm(false)
        setOperation('CREATE')
      }).catch(e => {
        setUsuarios(undefined);
      })
    }
  }

  const onDelete = (values: any) => {
    usuarioStore.deleteUsuario(values).then(response => {
      setIsForm(false);
      usuarioStore.getUsuarios().then(response => {
        setUsuarios(usuarioStore.usuarios)
        setOperation('CREATE');
      })
    }).catch(e => {
      setUsuarios(undefined);
    })
  }

  const onAlter = (values: any) => {
    setOperation('UPDATE');
    usuarioStore.getUsuario(values).then(response => {
      setIsForm(true);
      
    }).catch(e => {
      setUsuarios(undefined);
    })
  }

  const form = isForm ?
    <UsuarioForm
      onSubmit={onSubmit}
      operation={operation}
      defaultValues={usuarioStore.usuario}
    />
    : <UsuarioTable
      data={usuarios}
      onDelete={onDelete}
      onAlter={onAlter}
    />
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><ButtonLink type="link" onClick={() => setIsForm(false)}>Usuário</ButtonLink></Breadcrumb.Item>
        <Breadcrumb.Item><ButtonLink type="link" onClick={() => setIsForm(true)}>Novo Usuário</ButtonLink></Breadcrumb.Item>
      </Breadcrumb>
      {form}

    </>
  )
}

export default UsuarioPage;