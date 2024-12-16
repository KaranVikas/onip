import { Layout, Menu } from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import InternationalStudentStreamPdf from './InternationalStudentStreamPdf';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const InternationalStudentStream = () => {
  const { t } = useTranslation();


  return (
    <>
      <Helmet>
        <title>{t('foreign_worker_stream')}</title>
      </Helmet>
      <Content style={contentStyle}>
        <InternationalStudentStreamPdf name={"Test"} age={26} />
      </Content>
    </>

  );
}

export default InternationalStudentStream;
