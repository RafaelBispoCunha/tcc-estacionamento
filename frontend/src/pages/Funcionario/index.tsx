import React, { useEffect,useState } from 'react';
import {  Breadcrumb } from 'antd';
import FuncionarioForm from './FuncionarioForm';
import FuncionarioTable from './FuncionarioTable';

const FuncionarioPage = () =>{
  const [isForm, setIsForm] = useState(false);
  const [data, setData] = useState([]);
  const [operation, setOperation ]= useState('CREATE')


  const onSubmit = (values: any) =>{
    console.log( values);
  } 

  const onDelete = (values: any) =>{
    console.log( values);
  } 

  const onAlter = (values: any) =>{
    console.log( values);
  } 
  

  const form =  isForm ? 
    <FuncionarioForm 
      onSubmit={onSubmit} 
      operation={operation}
      defaultValues={data}
    /> 
  : <FuncionarioTable 
      data={data} 
      onDelete={onDelete}
      onAlter={onAlter}
    />
   return(
     <>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item ><a onClick={() => setIsForm(false)}>Funcionario</a></Breadcrumb.Item>
          <Breadcrumb.Item><a onClick={() => setIsForm(true)}>Novo Funcionario</a></Breadcrumb.Item>
        </Breadcrumb>
        {form}
       
     </>
   )
}

export default FuncionarioPage;