import { Space, DatePicker, Input, Layout, Button, Flex, Menu, ConfigProvider, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import PdfDocument from '../../components/PdfDocument';
import { useState } from 'react';
import { differenceInYears, parseISO } from 'date-fns';
import { useTranslation } from 'react-i18next';
import frCA from 'antd/locale/fr_CA';
import enCA from 'antd/locale/en_US';
import { Helmet } from 'react-helmet';


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

const Sample = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState();
  const [age, setAge] = useState();

  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState('en');

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
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const languageMenu = (
    <Menu onClick={({ key }) => changeLanguage(key)}>
      <Menu.Item key="en">
        🇬🇧 English
      </Menu.Item>
      <Menu.Item key="fr">
        🇫🇷 Français
      </Menu.Item>
    </Menu>
  );

  // Select Ant Design locale based on selected language
  const antdLocale = language === 'en' ? enCA : frCA;

  return (
    <ConfigProvider locale={antdLocale}>
      <Helmet>
        <title>{t('welcome')}</title>
      </Helmet>
      <Layout style={layoutStyle}>
        <Sider width="25%" style={siderStyle}>
          <Flex gap="middle" justify='center' align='center' vertical>
            <Space><Input value={name} placeholder="Name" onChange={handleNameChange} /></Space>
            <Space><DatePicker value={dob} format="YYYY-MM-DD" placeholder="Select your DOB" onChange={handleDobChange} /></Space>
            <Space><Button type='primary' block>Submit</Button></Space>
          </Flex>
        </Sider>
        <Layout>
          <Header style={headerStyle}>
            <Menu mode="horizontal">
              <Menu.Item key="1">{t('welcome')}</Menu.Item>
              <Menu.Item key="2">
                <Dropdown overlay={languageMenu} trigger={['click']}>
                  <Button>
                    {language === 'en' ? "🇬🇧 English" : "🇫🇷 Français"} <DownOutlined />
                  </Button>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Header>
          <Content style={contentStyle}>
            <PdfDocument name={name} age={age} />
          </Content>
          <Footer style={footerStyle}> This is footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>


  );
}

export default Sample;
