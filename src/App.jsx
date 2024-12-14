import { Space, DatePicker, Input, Layout, Row, Button, Flex } from 'antd';
import './App.css';
import PdfDocument from './components/PdfDocument';
import { useState } from 'react';
import { differenceInYears, parseISO } from 'date-fns';


const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
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
  overflow: 'hidden',
  height: '100vh',
};

const App = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState();
  const [age, setAge] = useState();
  
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleDobChange = (date, dateString) => {
    setDob(date);
    if (dateString) {
      const birthDate = parseISO(dateString);
      const currentAge = differenceInYears(new Date(), birthDate);
      setAge(currentAge)
    } else {
      setAge(null);
    }
  }

  return (
    <Layout style={layoutStyle}>
      <Sider width="25%" style={siderStyle}>
        Sider
      </Sider>
      <Layout>
        <Header style={headerStyle}>
          <Flex gap="middle" justify='center' align='center'>
            <Space><Input value={name}  placeholder="Name" onChange={handleNameChange}/></Space>
            <Space><DatePicker value={dob} format="YYYY-MM-DD" placeholder="Select your DOB" onChange={handleDobChange}/></Space>
            <Space><Button type='primary' block>Submit</Button></Space>
          </Flex>
        </Header>
        <Content style={contentStyle}>
          <PdfDocument name={name} age={age} />
        </Content>
        <Footer style={footerStyle}> This is footer</Footer>
      </Layout>
    </Layout>

  );
}

export default App;
