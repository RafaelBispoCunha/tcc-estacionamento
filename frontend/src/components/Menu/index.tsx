import React, { useState } from 'react';
import { Menu } from 'antd';
import { 
   HomeOutlined,
   CaretDownOutlined, 
   CaretUpOutlined, 
   CarOutlined, 
   AreaChartOutlined, 
   UserOutlined, 
   LogoutOutlined 
} from '@ant-design/icons';

import { useAuth } from '../../auth';

const MenuHorizontal = () => {

   const { logout } = useAuth();

   return (

      <Menu
         mode="horizontal"
         style={{ background: '#001529', color: '#FFF', height: 65, width: '100%' }}
      >
         <Menu.Item key="home" icon={<HomeOutlined /> }>
            Home
            <a href="/" >

            </a>
         </Menu.Item>
         <Menu.Item key="entrada" icon={<CaretDownOutlined /> }>
            Entrada
            <a href="/entrada">

            </a>
         </Menu.Item>

         <Menu.Item key="saida" icon={<CaretUpOutlined />}>
            Saida
            <a href="/saida" >

            </a>
         </Menu.Item>

         <Menu.Item key="vagas" icon={< CarOutlined />}>
            Vagas
            <a href="/vagas" >

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
            <a onClick={logout} >

            </a>
         </Menu.Item>
      </Menu>

   )
}
export default MenuHorizontal;