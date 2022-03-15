import React from 'react';
import { Form, Input, Button } from 'antd';
import MaskedInput from 'antd-mask-input'
 
const ClienteForm: React.FC<any> = ({
  onSubmit = () => { },
  operation,
  defaultValues
}
) => {

  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'row', width: '75%'}}>
          <Form.Item
            label="ID"
            name="id"
            hidden
            initialValue={operation === 'UPDATE' ? defaultValues?.id : ''}
            style={{ width: 200, marginRight: 20 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nome"
            name="nome"
            initialValue={operation === 'UPDATE' ? defaultValues?.nome : ''}
            rules={[{ required: true, message: 'Informe o nome!' }]}
            style={{ width: 500, marginRight: 20 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CPF"
            name="cpf"
            initialValue={operation === 'UPDATE' ? defaultValues?.cpf : ''}
            rules={[{ required: true, message: 'Informe o CPF!' }]}
            style={{ width: 180 }}
          >
            <MaskedInput mask="111.111.111-11"/>
          </Form.Item>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '75%' }}>
          <Form.Item
            label="E-mail"
            name="email"
            initialValue={operation === 'UPDATE' ? defaultValues?.email : ''}
            rules={[{ required: true, message: 'Informe o e-mail!' }]}
            style={{ width: 500, marginRight: 20 }}
          >
            <Input type={'email'} />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name="telefone"
            initialValue={operation === 'UPDATE' ? defaultValues?.telefone : ''}
            style={{ width: 180, marginRight: 20 }}
          >
            <MaskedInput mask="(11)1111-1111"/>
          </Form.Item>
          <Form.Item
            label="Celular"
            name="celular"
            initialValue={operation === 'UPDATE' ? defaultValues?.celular : ''}
            rules={[{ required: true, message: 'Informe o número de celular!' }]}
            style={{ width: 180, marginRight: 20 }}
          >
            <MaskedInput mask="(11)11111-1111"/>
          </Form.Item>


        </div>


        <div style={{ display: 'flex', marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Salvar</Button>
            <Button type="primary" style={{ marginLeft: 20}} danger>Excluir</Button>
          </Form.Item>
        </div>
      </div>
    </Form >
  )
}

export default ClienteForm;