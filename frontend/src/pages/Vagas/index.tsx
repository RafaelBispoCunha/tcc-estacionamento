import React, { useState, useEffect } from 'react';
import { Breadcrumb } from 'antd';
import VagaForm from './VagaForm'
import VagaTable from './VagaTable'

const VagaPage = () => {

  const [isForm, setIsForm] = useState(false);
  const [operation, setOperation] = useState('CREATE')

  useEffect(() => {
  })

  const onSubmit = (values: any) => {
    console.log(values)
  }

  const onDelete = (values: any) => {
    console.log(values)
  }

  const onAlter = (values: any) => {
    console.log(values)
  }

  const form = isForm ?
    <VagaForm
      onSubmit={onSubmit}
      operation={operation}
      defaultValues={[]}
      isForm={() => setIsForm(true)}
    />
    : <VagaTable
      data={[]}
      onDelete={onDelete}
      onAlter={onAlter}
    />

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><a onClick={() => {
          setIsForm(false);
          setOperation('CREATE')
        }}
        >
          Vagas</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item><a onClick={() => setIsForm(true)}>Nova Vaga</a></Breadcrumb.Item>
      </Breadcrumb>
      {form}

    </>
  )
}

export default VagaPage;