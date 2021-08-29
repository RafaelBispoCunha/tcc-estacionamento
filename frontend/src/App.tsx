import React from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd'
import MenuHorizontal from './components/Menu'
import Routes from './routes'

const App = () => {

  const { Header, Content, Footer } = Layout;
  return (
    <>

      <Layout style={{ height: '100%' }} >

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
              <Routes />
            </Content>
          </Layout>

        </Layout>
        <Footer style={{ textAlign: 'center' }}>
          Footer
        </Footer>
      </Layout>
    </>
  );
}

export default App;