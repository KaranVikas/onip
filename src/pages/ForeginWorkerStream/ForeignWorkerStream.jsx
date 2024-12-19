import { Button, Layout, Modal } from "antd";
import { Helmet } from "react-helmet";
import ForeignWorkerStreamPdf from "./ForeginWorkerStreamPdf";
import { useTranslation } from "react-i18next";
import { Form, Select } from "antd/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  padding: "20px 50px",
  overflow: "scroll",
};

const ForeignWorkerStream = () => {
  const { t } = useTranslation();
  const [componentSize, setComponentSize] = useState("default");
  const [totalScore, setTotalScore] = useState(0);
  const [answer, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  // Mapping of answers to scores
  const scoreMapping = {
    workPermitStatus: {
      "With valid work permit": 10,
      "Without valid work permit": 0,
    },
    occupation: {
      "With valid work permit": 10,
      "Without valid work permit": 0,
    },
    hourlyWage: {
      "Less than $20": 0,
      "$20 to $24.99": 5,
      "$25 to $29.99": 6,
      "$30 to $34.99": 7,
      "$35 to $39.99": 8,
      "$40 or higher": 10,
    },
    workDuration: {
      "6 months or more": 3,
      "Less than 6 months": 0,
    },
    jobLocation: {
      "Northern Ontario": 10,
      "Other areas outside Greater Toronto Area (except Northern Ontario)": 8,
      "Greater Toronto Area excluding Toronto": 3,
      Toronto: 0,
    },
    earningsHistory: {
      "Less than $40k earnings in a year": 0,
      "More than $40k earnings in a year": 3,
    },
    languageKnowledge: {
      "Two official languages": 10,
      "One official language": 0,
    },
    languageAbility: {
      "CLB 9 or higher": 10,
      "CLB 8": 6,
      "CLB 7": 4,
      "CLB 6 or lower": 0,
    },
  };

  const handleScoreChange = (question, value) => {
    const newScore = scoreMapping[question]?.[value] || 0; // Get the new score

    // Save answer to the answers state

    setAnswers((prevAnswers) => {
      const updatedAnswers = { ...prevAnswers };

      //Nested logic
      const categoryMapping = {
        workPermitStatus: "Work Experience",
        occupation: "Job Offer",
        hourlyWage: "Job Offer",
        workDuration: "Job Offer",
        jobLocation: "Job Offer",
        earningsHistory: "Earnings History",
        languageKnowledge: "Language Skills",
        languageAbility: "Language Skills",
      };

      const category = categoryMapping[question];
      if (!updatedAnswers[category]) {
        updatedAnswers[category] = {}; //Create the category if it does n't exist
      }
      const previousScore = updatedAnswers[category][question]?.score || 0; // Retrieve the previous score
      updatedAnswers[category][question] = {
        description: value,
        score: newScore,
      };

      // Update the total score
      setTotalScore((prevScore) => prevScore - previousScore + newScore);
      return updatedAnswers;
    });
    console.log(newScore);
    console.log({ answer });
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <>
      <Helmet>
        <title>{t("foreign_worker_stream")}</title>
      </Helmet>
      <Content style={contentStyle}>
        {/* <ForeignWorkerStreamPdf name={"Test"} age={26} /> */}
        <Form
          labelCol={{
            span: 25,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="vertical"
          initialValues={{
            size: componentSize,
          }}
          onValuesChange={onFormLayoutChange}
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item label="What is your current work or study permit status?">
            <Select
              onChange={(value) => handleScoreChange("workPermitStatus", value)}
            >
              <Select.Option value="With valid work permit">
                With valid work permit
              </Select.Option>
              <Select.Option value="Without valid work permit">
                Without valid work permit
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What occupation do you have a job offer for?">
            <Select
              onChange={(value) => handleScoreChange("occupation", value)}
            >
              <Select.Option value="demo">With valid work permit</Select.Option>
              <Select.Option value="demo">
                Without valid work permit
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is the hourly wage of your job offer?">
            <Select
              onChange={(value) => handleScoreChange("hourlyWage", value)}
            >
              <Select.Option value="Less than $20">Less than $20</Select.Option>
              <Select.Option value="$20 to $24.99">$20 to $24.99</Select.Option>
              $25 to $29.99
              <Select.Option value="$25 to $29.99">$25 to $29.99</Select.Option>
              <Select.Option value="$30 to $34.99">$30 to $34.99</Select.Option>
              <Select.Option value="$35 to $39.99">$35 to $39.99</Select.Option>
              <Select.Option value="$40 or higher">$40 or higher</Select.Option>
            </Select>
          </Form.Item>
          {/* <Form.Item label="What is the hourly wage of your job offer?">
          <Radio.Group>
            <Radio value="Less than $20"> Less than $20 </Radio>
            <Radio value="$20 to $24.99"> $20 to $24.99 </Radio>
            <Radio value="$25 to $29.99"> $25 to $29.99 </Radio>
            <Radio value="$30 to $34.99"> $30 to $34.99 </Radio>
            <Radio value="$35 to $39.99"> $35 to $39.99 </Radio>
            <Radio value="$40 or higher"> $40 or higher </Radio>
          </Radio.Group>
        </Form.Item> */}

          <Form.Item label="How long have you worked in your job offer position?">
            <Select
              onChange={(value) => handleScoreChange("workDuration", value)}
            >
              <Select.Option value="6 months or more">
                6 months or more
              </Select.Option>
              <Select.Option value="Less than 6 months">
                Less than 6 months
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is the location of your job offer?">
            <Select
              onChange={(value) => handleScoreChange("jobLocation", value)}
            >
              <Select.Option value="6 months or more">
                Northern Ontario
              </Select.Option>
              <Select.Option value="Other areas outside Greater Toronto Area (except Northern Ontario)">
                Other areas outside Greater Toronto Area (except Northern
                Ontario)
              </Select.Option>
              <Select.Option value="Greater Toronto Area excluding Toronto">
                Greater Toronto Area excluding Toronto
              </Select.Option>
              <Select.Option value="Toronto">Toronto</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is your highest Canadian earnings history in a single tax year?">
            <Select
              onChange={(value) => handleScoreChange("earningsHistory", value)}
            >
              <Select.Option value="Less than $40k earnings in a year">
                Less than $40k earnings in a year
              </Select.Option>
              <Select.Option value="More than $40k earnings in a year">
                More than $40k earnings in a year
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is your knowledge of Canada's official languages (English and French)?">
            <Select
              onChange={(value) =>
                handleScoreChange("languageKnowledge", value)
              }
            >
              <Select.Option value="Two official languages">
                Two official languages
              </Select.Option>
              <Select.Option value="One official language">
                One official language
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is your overall offical language ability in English and/or French?">
            <Select
              onChange={(value) => handleScoreChange("languageAbility", value)}
            >
              <Select.Option value="CLB 9 or higher">
                CLB 9 or higher
              </Select.Option>
              <Select.Option value="CLB 8">CLB 8</Select.Option>
              <Select.Option value="CLB 7">CLB 7</Select.Option>
              <Select.Option value="CLB 6 or lower">
                CLB 6 or lower
              </Select.Option>
            </Select>
          </Form.Item>

          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h3>Total Score: {totalScore}</h3>

            <Button onClick={showModal}>Open Report</Button>
            <Modal
              title="Score Card"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={700}
              // height={800}
            >
              <ForeignWorkerStreamPdf answer={answer} totalScore={totalScore} />
            </Modal>
          </div>
        </Form>
      </Content>
    </>
  );
};

export default ForeignWorkerStream;
