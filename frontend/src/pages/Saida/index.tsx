import React from 'react';

import { InputNumber, Input } from 'antd';
import { Button, Breadcrumb } from 'antd';
import SaidaTable from './SaidaTable';
import SaidaForm from './SaidaForm'

const SaidaPage = () => {

  const onSubmit = (values: any) => {
    console.log(values);
  }

  const onChange = (value: any) => {
    console.log('changed', value);
  }

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><a href="suite">Saida</a></Breadcrumb.Item>

      </Breadcrumb>

      <SaidaForm onSubmit={onSubmit} />


      <div style={{ borderBottom: 'solid 1px #bbb', marginTop: -30 }}>
        <SaidaTable data={[]} />
      </div>


      <div style={{ display: 'flex', alignItems: 'flex-end', flexDirection: 'column', marginTop: 10 }}>
        <label style={{ marginTop: 5 }}>
          Qtde. Parcela<br />
          <InputNumber style={{ width: 100, marginTop: 5, marginRight: 20 }} min={1} max={12} defaultValue={1} onChange={onChange} />
        </label>
        <label style={{ marginTop: 5 }}>
          Valor Parcela<br />
          <Input style={{ width: 100, marginTop: 5, marginRight: 20 }} onChange={onChange} />
        </label>
        <label style={{ marginTop: 5 }}>
          Valor Total<br />
          <Input style={{ width: 100, marginTop: 5, marginRight: 20 }} onChange={onChange} />
        </label>


      </div>
      <div style={{ display: 'flex', alignItems: 'flex-end', marginTop: 10, marginRight: 10 }}>
        <Button type="primary">Pagar</Button>
      </div>

    </>
  )
}

export default SaidaPage;