import { Button, ConfigProvider, Dropdown, Layout, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import frCA from "antd/locale/fr_CA";
import enCA from "antd/locale/en_US";
import { Route, Routes } from "react-router-dom";
import ForeignWorkerStream from "./pages/ForeginWorkerStream";
import InDemandStream from "./pages/InDemandStream";
import InternationalStudentStream from "./pages/InternationalStudentStream";
import MasterStudentStream from "./pages/MasterStream";
import PHDStream from "./pages/PHDStream/PHDStream";
import Home from "./pages/Home";
import InStream from "./pages/Instream/InStream";

const { Header, Footer } = Layout;

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 48,
  lineHeight: "64px",
  backgroundColor: "#4096ff",
};

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  height: "100vh",
};

const App = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  const languageMenu = (
    <Menu onClick={({ key }) => changeLanguage(key)}>
      <Menu.Item key="en">🇬🇧 English</Menu.Item>
      <Menu.Item key="fr">🇫🇷 Français</Menu.Item>
    </Menu>
  );

  // Select Ant Design locale based on selected language
  const antdLocale = language === "en" ? enCA : frCA;

  return (
    <ConfigProvider locale={antdLocale}>
      <Layout style={layoutStyle}>
        <Layout>
          <Header style={headerStyle}>
            <Menu mode="horizontal">
              <Menu.Item key="1">{t("welcome")}</Menu.Item>
              <Menu.Item key="2">
                <Dropdown overlay={languageMenu} trigger={["click"]}>
                  <Button>
                    {language === "en" ? "🇬🇧 English" : "🇫🇷 Français"}{" "}
                    <DownOutlined />
                  </Button>
                </Dropdown>
              </Menu.Item>
            </Menu>
          </Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/foreign_worker_stream"
              element={<ForeignWorkerStream />}
            />
            <Route
              path="/in_demand_worker_stream"
              element={<InDemandStream />}
            />
            <Route
              path="/international_student_stream"
              element={<InternationalStudentStream />}
            />
            <Route path="/master_stream" element={<MasterStudentStream />} />
            <Route path="/phd_stream" element={<PHDStream />} />
            <Route path="/in_stream" element={<InStream />} />

            <Route path="*" element={<h2>404 - Page not found</h2>} />
          </Routes>
          <Footer style={footerStyle}> This is footer</Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
