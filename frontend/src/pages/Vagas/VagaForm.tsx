import React from 'react';
import { Form, Input, Button } from 'antd';
import {  InputNumber } from 'antd';

const VagaForm: React.FC<any> = ({
  onSubmit = () => { },
  operation,
  defaultValues
}) => {

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();


  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      onFinishFailed={onFinishFailed}
    >
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
          <Form.Item
            label="ID"
            name="id"
            hidden
            initialValue={operation === 'UPDATE' ? defaultValues[0].id : ''}
            style={{ width: 200, marginRight: 20 }}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Andar"
            name="andar"
            initialValue={operation === 'UPDATE' ? defaultValues[0].andar : 0}
            rules={[{ required: true, message: 'Please input your username!' }]}

          >
            <InputNumber min={0} max={10} defaultValue={1} style={{ marginRight: 20 }} />
          </Form.Item>

          <Form.Item
            label="N° Vaga"
            name="numeroVaga"
            initialValue={operation === 'UPDATE' ? defaultValues[0].numeroVaga : ''}
            
          >
            <InputNumber min={0} max={10} defaultValue={0} style={{ marginRight: 20 }}/>
          </Form.Item>

          <Form.Item
            label="Disponibilidade"
            name="disponibilidade"
            initialValue={operation === 'UPDATE' ? defaultValues[0].disponibilidade : 'Disponivel'}
            style={{ width: 150}}
          
          >
            <Input disabled />

          </Form.Item>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Salvar</Button>
            <Button type="primary" style={{ marginLeft: 20, background: 'red' }}>Excluir</Button>
          </Form.Item>
        </div>
      </div>
    </Form>

  )
}

export default VagaForm;