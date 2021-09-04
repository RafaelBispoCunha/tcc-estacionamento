import React from "react";

import { Form, Input, Button } from 'antd';
import car from '../../assets/car.png'
import { Container, FormContainer,  Title, Logo } from "./style";
import { useAuth } from "../../auth";

const Login: React.FC = () => {


   const { login } = useAuth();

   const onFinish = (values: any) => {
      console.log('Success:', values);
      login(values.usuario, values.senha)
   };


   const onFinishFailed = (errorInfo: any) => {
      console.log('Failed:', errorInfo);
   };

   return (
      <Container>
         <Logo>
            <img src={car} alt="Estacionamento" />
            <h1>Estacionamento</h1>
         </Logo>
         <FormContainer>
         
         <Title>Entrar</Title>
         <Form
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
         >
            <Form.Item
               name="usuario"
               rules={[{ required: true, message: 'Please input your username!' }]}
            >
               <Input placeholder="Usuário" style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item

               name="senha"
               rules={[{ required: true, message: 'Please input your password!' }]}
            >
               <Input.Password placeholder="Senha" />
            </Form.Item>

               <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                  Entrar
               </Button>
         
         </Form>
         </FormContainer>
      </Container>
   )
}
export default Login;