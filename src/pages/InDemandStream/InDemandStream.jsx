import { Layout, Menu } from 'antd';
import { Helmet } from 'react-helmet';
import InDemandStreamPdf from './InDemandStreamPdf';
import { useTranslation } from 'react-i18next';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const InDemandStream = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>{t('indemand_stream')}</title>
      </Helmet>
      <Content style={contentStyle}>
        <InDemandStreamPdf name={"Test"} age={26} />
      </Content>
    </>

  );
}

export default InDemandStream;
