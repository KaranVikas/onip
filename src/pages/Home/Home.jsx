import { Card, Col, Layout, Row, Space } from "antd";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{t("common.home")}</title>
      </Helmet>
      <Content style={contentStyle}>
        <Space>
          <p>{t("common.home")}</p>
        </Space>
        <Row gutter={[16, 16]} align="middle" justify="center">
          <Col span={8}>
            <Space direction="vertical" size={16}>
              <Card
                hoverable
                title={t("common.foreign_worker_stream")}
                onClick={() => {
                  navigate("foreign_worker_stream");
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Space>
          </Col>

          <Col span={8}>
            <Space direction="vertical" size={16}>
              <Card
                hoverable
                title={t("common.in_demand_worker_stream")}
                onClick={() => {
                  navigate("in_demand_worker_stream");
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Space>
          </Col>

          <Col span={8}>
            <Space direction="vertical" size={16}>
              <Card
                hoverable
                title={t("common.international_student_stream")}
                onClick={() => {
                  navigate("international_student_stream");
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Space>
          </Col>

          <Col span={8}>
            <Space direction="vertical" size={16}>
              <Card
                hoverable
                title={t("common.masters_stream")}
                onClick={() => {
                  navigate("master_stream");
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Space>
          </Col>

          <Col span={8}>
            <Space direction="vertical" size={16}>
              <Card
                hoverable
                title={t("common.phd_stream")}
                onClick={() => {
                  navigate("phd_stream");
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Space>
          </Col>
        </Row>
      </Content>
    </>
  );
};

export default Home;
