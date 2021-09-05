import React from 'react';
import { Form, Input, Button } from 'antd';
import {  InputNumber } from 'antd';
import { IVaga } from './../../model/models';

export interface IVagaFormProps {
  onSubmit?: (dataForm: any) => void;
  operation: string;
  defaultValues?: IVaga;
}

const VagaForm: React.FC<IVagaFormProps> = ({
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
            initialValue={operation === 'UPDATE' ? defaultValues?.id : ''}
            style={{ width: 200, marginRight: 20 }}
          >
            <Input />
          </Form.Item>


          <Form.Item
            label="Andar"
            name="andar"
            initialValue={operation === 'UPDATE' ? defaultValues?.andar : 0}
            

          >
            <InputNumber min={0} max={10} defaultValue={0} style={{ marginRight: 20 }} />
          </Form.Item>

          <Form.Item
            label="N° Vaga"
            name="numeroVaga"
            initialValue={operation === 'UPDATE' ? defaultValues?.numeroVaga : ''}
            rules={[{ required: true, message: 'Informe o número da vaga!' }]}
            
          >
            <InputNumber min={0} max={10} defaultValue={defaultValues?.numeroVaga ? defaultValues?.numeroVaga : ''} style={{ marginRight: 20 }}/>
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            initialValue={operation === 'UPDATE' ? defaultValues?.status : 'Disponivel'}
            style={{ width: 150}}
          
          >
            <Input disabled />

          </Form.Item>

        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
          <Form.Item>
            <Button type="primary" htmlType="submit" >Salvar</Button>
            <Button type="primary" style={{ marginLeft: 20}} danger>Excluir</Button>
          </Form.Item>
        </div>
      </div>
    </Form>

  )
}

export default VagaForm;