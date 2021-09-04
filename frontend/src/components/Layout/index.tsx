import React from "react";
import { Layout } from 'antd'
import MenuHorizontal from '../Menu'

const LayoutContent: React.FC = ({ children }) => {

   const { Header, Content, Footer } = Layout;

   return (
      <Layout>
         <Header style={{ color: '#FFF' }}>
            <MenuHorizontal />
         </Header>

         <Layout>
            <Layout style={{ padding: '0 24px 24px' }}>
               <Content style={{
                  padding: 24,
                  margin: 0,
                  marginTop: 30,
                  height: 'auto',
                  width: '100%',
                  background: '#fff',
                  // overflowY: 'hidden',
                  //overflowX: 'scroll'
               }}>
                  {children}

               </Content>

            </Layout>
         </Layout>
         <Footer style={{ textAlign: 'center' }}>
            Footer
         </Footer>
      </Layout>
   )

}

export default LayoutContent;