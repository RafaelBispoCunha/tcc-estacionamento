import React, { useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, CaretDownOutlined, CaretUpOutlined, CarOutlined, AreaChartOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

const MenuHorizontal = () => {

   const [current, setCurrent] = useState('home')

   const handleClick = (e: any) => {
      setCurrent(e.key)
   };

   return (

      <Menu
         onClick={handleClick}
         selectedKeys={[current]}
         mode="horizontal"
         style={{ background: '#001529', color: '#FFF', height: 65, width: '100%' }}
      >
         <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
            <a href="/home" >

            </a>
         </Menu.Item>
         <Menu.Item key="entrada" icon={<CaretDownOutlined />}>
            Entrada
            <a href="/entrada" >

            </a>
         </Menu.Item>

         <Menu.Item key="saida" icon={<CaretUpOutlined />}>
            Saida
            <a href="/saida" >

            </a>
         </Menu.Item>

         <Menu.Item key="Vaga" icon={< CarOutlined />}>
            Vagas
            <a href="/vaga" >

            </a>
         </Menu.Item>

         <Menu.Item key="consultas" icon={<AreaChartOutlined />}>
            Consultas
            <a href="/consultas" >

            </a>
         </Menu.Item>

         <Menu.Item key="funcionario" icon={<UserOutlined />}>
            Funcionario
            <a href="/funcionario" rel="noopener noreferrer">

            </a>
         </Menu.Item>

         <Menu.Item key="sair" icon={<LogoutOutlined />}>
            Sair
            <a href="/sair" >

            </a>
         </Menu.Item>
      </Menu>

   )
}
export default MenuHorizontal;