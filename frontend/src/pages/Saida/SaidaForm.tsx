import React from 'react';
import { Input, Form } from 'antd';
import { Button } from 'antd';

const SaidaForm:React.FC<any> = ({
  onSubmit = () =>{}
  })=>{
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const [form] = Form.useForm();


   return(
      <Form
         form={form}
         layout="vertical"
         name="basic"
         initialValues={{ remember: true }}
         onFinish={onSubmit}
         onFinishFailed={onFinishFailed}
      >
         <div style={{display: 'flex', justifyContent: 'center',flexDirection: 'row'}}>

            <Form.Item 
                  label="Placa do Veículo" 
                  name="placa"
                  //initialValue={operation === 'UPDATE' ? defaultValues[0].id :''}
                
                  style={{width: 200, marginRight: 20}}
                  >
                  <Input/>
             </Form.Item>

            <Form.Item>
               <Button type="primary" htmlType="submit" style={{marginTop: 30}}>Buscar</Button>
            </Form.Item>
         </div>
      </Form>
   )
}

export default SaidaForm;