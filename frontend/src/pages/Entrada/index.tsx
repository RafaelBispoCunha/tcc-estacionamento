import React, { useState, useEffect } from 'react';
import {  Breadcrumb } from 'antd';
import EntradaForm from './EntradaForm';
import EntradaTable from './EntradaTable';


const EntradaPage = () => {
  
  const [isForm, setIsForm] = useState(false);
 

  const onSearchVehicle = (value: any) => {
    
    console.log(value)
    
  };


  useEffect(() => {
  });

  const onSubmit = (values: any) => {
    console.log(values)
    console.log(isForm)
    
  }

  
  return (
    <div>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item ><a href="entrada">Veiculos Estacionados</a></Breadcrumb.Item>
        <Breadcrumb.Item><a onClick={() => setIsForm(true)}>Nova Entrada</a></Breadcrumb.Item>
      </Breadcrumb>
      


      {/*  <VagaTable data={data}/>*/}

      {isForm ? <EntradaForm onSubmit={onSubmit} data={[]} onSearchVehicle={onSearchVehicle}/>
      : <EntradaTable data={[]}/>}

    </div>
  )
}

export default EntradaPage;