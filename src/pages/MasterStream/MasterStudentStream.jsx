import { Layout, Menu } from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import MasterStudentStreamPdf from './MasterStudentStreamPdf';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const MasterStudentStream = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>{t('master_stream')}</title>
      </Helmet>
      <Content style={contentStyle}>
        <MasterStudentStreamPdf name={"Test"} age={26} />
      </Content>
    </>

  );
}

export default MasterStudentStream;
