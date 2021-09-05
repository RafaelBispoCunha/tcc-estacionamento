import React from 'react';
import { Select } from 'antd';
import { Form, Input, Button } from 'antd';
 
const UsuarioForm: React.FC<any> = ({
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
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 500, marginRight: 20 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="CPF"
            name="cpf"
            initialValue={operation === 'UPDATE' ? defaultValues?.cpf : ''}
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 200 }}
          >
            <Input />
          </Form.Item>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '75%' }}>
          <Form.Item
            label="E-mail"
            name="email"
            initialValue={operation === 'UPDATE' ? defaultValues?.email : ''}
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 500, marginRight: 20 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Telefone"
            name="telefone"
            initialValue={operation === 'UPDATE' ? defaultValues?.telefone : ''}
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 200, marginRight: 20 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Nivel de Acesso"
            name="nivelAcesso"
            initialValue={operation === 'UPDATE' ? defaultValues?.nivelAcesso : ''}
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 200 }}
          >
            <Select>
              <Select.Option value="ADMIN">Administrador</Select.Option >
              <Select.Option value="NORMAL">Normal</Select.Option >
            </Select>
          </Form.Item>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', width: '75%' }}>
          <Form.Item
            label="Senha"
            name="senha"
            initialValue={operation === 'UPDATE' ? defaultValues?.senha : ''}
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 300, marginRight: 20 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Confirma Senha"
            name="senha2"
            rules={[{ required: true, message: 'Please input your username!' }]}
            style={{ width: 300 }}
          >
            <Input />
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

export default UsuarioForm;