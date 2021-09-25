import React from 'react';
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
            <a href="/home" >

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

         <Menu.Item key="vaga" icon={< CarOutlined />}>
            Vaga
            <a href="/vaga" >

            </a>
         </Menu.Item>

         <Menu.Item key="consulta" icon={<AreaChartOutlined />}>
            Consulta
            <a href="/consulta" >

            </a>
         </Menu.Item>

         <Menu.Item key="usuario" icon={<UserOutlined />}>
            Usuário
            <a href="/usuario" rel="noopener noreferrer">

            </a>
         </Menu.Item>

         <Menu.Item key="sair" icon={<LogoutOutlined />}>
            <span onClick={logout}>Sair</span  >
         </Menu.Item>
      </Menu>

   )
}
export default MenuHorizontal;