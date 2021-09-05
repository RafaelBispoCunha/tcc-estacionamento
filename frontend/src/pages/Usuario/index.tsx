import React, { useState } from 'react';
import {  Breadcrumb } from 'antd';
import UsuarioForm from './UsuarioForm';
import UsuarioTable from './UsuarioTable';

const UsuarioPage = () =>{
  const [isForm, setIsForm] = useState(false);
  const [data, setData] = useState([]);
  const [operation, setOperation ]= useState('CREATE')


  const onSubmit = (values: any) =>{
    console.log( values);
    setData([])
    setOperation('CREATE')
  } 

  const onDelete = (values: any) =>{
    console.log( values);
  } 

  const onAlter = (values: any) =>{
    console.log( values);
  } 
  

  const form =  isForm ? 
    <UsuarioForm 
      onSubmit={onSubmit} 
      operation={operation}
      defaultValues={data}
    /> 
  : <UsuarioTable 
      data={data} 
      onDelete={onDelete}
      onAlter={onAlter}
    />
   return(
     <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item ><span onClick={() => setIsForm(false)}>Usuário</span></Breadcrumb.Item>
          <Breadcrumb.Item><span onClick={() => setIsForm(true)}>Novo Usuário</span></Breadcrumb.Item>
        </Breadcrumb>
        {form}
       
     </>
   )
}

export default UsuarioPage;