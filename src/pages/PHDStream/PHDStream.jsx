import { Layout, Menu } from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import PHDStreamPdf from './PHDStreamPdf';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const PHDStream = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>{t('phd_stream')}</title>
      </Helmet>
      <Content style={contentStyle}>
        <PHDStreamPdf name={"Test"} age={26} />
      </Content>
    </>

  );
}

export default PHDStream;
