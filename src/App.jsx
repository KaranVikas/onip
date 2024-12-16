import React from 'react'
import Dyanform from './components/QuesForm/Dyanform'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '80px',
  
};
const contentStyle = {
  margin: '30px',
  // textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  overflow:'scroll'
 
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#1677ff',
};
const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};
const layoutStyle = {
  borderRadius: 8,
  height:'100vh',
  overflow:'hidden'
};


const App = () => {
  return (
    <Layout style={layoutStyle}>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Content style={contentStyle}>
          <h2> Check your score </h2>
          <h3>
            This website will help you to calculate your
            score based on the answer you provide below 
          </h3>
          {/* <QuesForm/> */}
          <Dyanform />
        </Content>
        <Sider width="40%" style={siderStyle}>
          Sider
        </Sider>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
  </Layout>
  )
}

export default App