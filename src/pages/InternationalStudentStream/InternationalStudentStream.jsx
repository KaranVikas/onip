import { Button, Layout, Modal } from "antd";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Form, Select } from "antd/lib";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InternationalStudentStreamPdf from "./InternationalStudentStreamPdf";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  padding: "20px 50px",
  overflow: "scroll",
};

const InternationalStudentStream = () => {
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
    highestLevelOfEducation: {
      "Less than college or trade certificate": 0,
      "Apprenticeship or trades certificate or diploma": 5,
      "Undergraduate diploma or certificate": 5,
      "Graduate diploma or certificate": 6,
      "Bachelors or equivalent": 6,
      Masters: 8,
      PhD: 10,
    },
    fieldOfStudy: {
      "STEM/health (engineering, health, math, computer science)": 12,
      "Business and administration, social, legal, education, behavioral science, personal, security and transport services,social work and related programs": 6,
      "Trades (agriculture and natural resources operations and management, mechanics and repair, architecture, construction and precision production)": 0,
      "Arts and humanities, business, humanities, arts, social science and education (BHASE) programs, not elsewhere classified (n.e.c)": 0,
    },
    canadianEducationExperience: {
      "More than one Canadian credential": 10,
      "One Canadian credential": 5,
      None: 0,
    },
    studyLocation: {
      "Northern Ontario": 10,
      "Other areas outside Greater Toronto Area (except Northern Ontario)": 8,
      "Greater Toronto Area excluding Toronto": 3,
      Toronto: 0,
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
        highestLevelOfEducation: "Education History",
        fieldOfStudy: "Education History",
        canadianEducationExperience: "Education History",
        studyLocation: "Education History",
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
        <title>{t("international_student_stream")}</title>
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

          <Form.Item label="What is your highest level of education?">
            <Select
              onChange={(value) =>
                handleScoreChange("highestLevelOfEducation", value)
              }
            >
              <Select.Option value="Less than college or trade certificate">
                Less than college or trade certificate
              </Select.Option>
              <Select.Option value="Apprenticeship or trades certificate or diploma">
                Apprenticeship or trades certificate or diploma
              </Select.Option>
              <Select.Option value="Undergraduate diploma or certificate">
                Undergraduate diploma or certificate
              </Select.Option>
              <Select.Option value="Graduate diploma or certificate">
                Graduate diploma or certificate
              </Select.Option>
              <Select.Option value="Bachelors or equivalent">
                Bachelors or equivalent
              </Select.Option>
              <Select.Option value="Masters">Masters</Select.Option>
              <Select.Option value="PhD">PhD</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What was the field of study of your educational credential?">
            <Select
              onChange={(value) => handleScoreChange("fieldOfStudy", value)}
            >
              <Select.Option value="STEM/health (engineering, health, math, computer science)">
                STEM/health (engineering, health, math, computer science)
              </Select.Option>
              <Select.Option value="Trades (agriculture and natural resources operations and management, mechanics and repair, architecture, construction and precision production)">
                Trades (agriculture and natural resources operations and
                management, mechanics and repair, architecture, construction and
                precision production)
              </Select.Option>
              <Select.Option value="Business and administration, social, legal, education, behavioral science, personal, security and transport services, social work and related programs">
                Business and administration, social, legal, education,
                behavioral science, personal, security and transport services,
                social work and related programs
              </Select.Option>
              <Select.Option value="Arts and humanities, business, humanities, arts, social science and education (BHASE) programs, not elsewhere classified (n.e.c)">
                Arts and humanities, business, humanities, arts, social science
                and education (BHASE) programs, not elsewhere classified (n.e.c)
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="What is your Canadian education experience?">
            <Select
              onChange={(value) =>
                handleScoreChange("canadianEducationExperience", value)
              }
            >
              <Select.Option value="One Canadian credential">
                One Canadian credential
              </Select.Option>
              <Select.Option value="More than one Canadian credential">
                More than one Canadian credential
              </Select.Option>
              <Select.Option value="None">None</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Where did you Study in Ontario?">
            <Select
              onChange={(value) => handleScoreChange("studyLocation", value)}
            >
              <Select.Option value="Northern Ontario">
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
              <Select.Option value="Credential was completed without physically attending (in-person) classes">
                Credential was completed without physically attending
                (in-person) classes
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
              <InternationalStudentStreamPdf
                answer={answer}
                totalScore={totalScore}
              />
            </Modal>
          </div>
        </Form>
      </Content>
    </>
  );
};

export default InternationalStudentStream;
