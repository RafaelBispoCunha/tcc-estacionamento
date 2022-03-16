import React from 'react';
import { Form, Input } from 'antd';
import { Button } from 'antd';
import { IVeiculo } from '../../model/models';

interface IEntradaFormProps {
   onSubmit: (data: any) => void;
   defaultValues?: IVeiculo;
}

const EntradaForm: React.FC<IEntradaFormProps> = ({
   onSubmit = () => { },
   defaultValues

}) => {

   const [form] = Form.useForm();

   return (
      <Form
         form={form}
         layout="vertical"
         name="basic"
         initialValues={{ remember: true }}
         onFinish={onSubmit}
      >
         <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row'}}>
               <Form.Item
                  label="Nome do Condutor"
                  name="nomeCondutor"
                  style={{ width: 500, marginLeft: -230}}
                  rules={[{ required: true, message: 'Informe o nome do condutor!' }]}
               >

                  <Input />
               </Form.Item>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', marginBottom: 20 }}>

               <Form.Item
                  label="Placa"
                  name="placa"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.placa}
               >
                  <Input disabled />
               </Form.Item>
               <Form.Item
                  label="Modelo"
                  name="modelo"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.modelo}
               >
                  <Input disabled />
               </Form.Item>

               <Form.Item
                  label="Marca"
                  name="marca"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.marca}
               >
                  <Input disabled />
               </Form.Item>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>

               <Form.Item
                  label="Cor"
                  name="cor"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.cor}
               >
                  <Input disabled />
               </Form.Item>

               <Form.Item
                  label="Ano do Modelo"
                  name="anoFabricacao"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.anoFabricacao}
               >
                  <Input disabled />
               </Form.Item>

               <Form.Item
                  label="Situação"
                  name="situacao"
                  style={{ width: 230, margin: '0 10px' }}
                  initialValue={defaultValues?.situacao === undefined ? '' : defaultValues?.situacao}

               >
                  <Input disabled />
               </Form.Item>

            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}>
               <Form.Item>
                  <Button type="primary" htmlType="submit" >Salvar</Button>
               </Form.Item>
            </div>
         </div>

      </Form>


   )
}

export default EntradaForm;