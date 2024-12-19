import { Button, Form, Layout, Modal } from "antd";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Select } from "antd/lib";
import PHDStreamPdf from "./PHDStreamPdf";

const { Content } = Layout;

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  padding: "20px 50px",
  overflow: "scroll",
};
const PHDStream = () => {
  const { t } = useTranslation();
  const [componentSize, setComponentSize] = useState("default");
  const [totalScore, setTotalScore] = useState(0);
  const [answer, setAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedValue, setSelectedValue] = useState(""); // Tracks current question

  const questions = [
    {
      id: 1,
      key: "workPermitStatus",
      label: "What is your current work or study permit status?",
      options: ["With valid work permit", "Without valid work permit"],
    },
    {
      id: 2,
      key: "highestLevelOfEducation",
      label: "What is your highest level of education?",
      options: [
        "Less than college or trade certificate",
        "Apprenticeship or trades certificate or diploma",
        "Undergraduate diploma or certificate",
        "Graduate diploma or certificate",
        "Bachelors or equivalent",
        "Masters",
        "PhD",
      ],
    },
    {
      id: 3,
      key: "fieldOfStudy",
      label: "What was the field of study of your educational credential?",
      options: [
        "STEM/health (engineering, health, math, computer science)",
        "Trades (agriculture and natural resources operations and management, mechanics and repair, architecture, construction and precision production)",
        "Business and administration, social, legal, education, behavioral science, personal, security and transport services, social work and related programs",
        "Arts and humanities, business, humanities, arts, social science and education (BHASE) programs, not elsewhere classified (n.e.c)",
      ],
    },
    {
      id: 4,
      key: "canadianEducationExperience",
      label: "What is your Canadian education experience?",
      options: ["More than one Credential", "One Credential", "None"],
    },
    {
      id: 5,
      key: "studyLocation",
      label: "Where did you Study in Ontario?",
      options: [
        "Northern Ontario",
        "Other areas outside Greater Toronto Area (except Northern Ontario)",
        "Greater Toronto Area excluding Toronto",
        "Toronto",
        "Credential was completed without physically attending (in-person) classes",
      ],
    },
    {
      id: 6,
      key: "earningHistory",
      label:
        "What is your highest canadian earnings history in a single tax year?",
      options: [
        "Less than $40k earnings in a year",
        "More than $40k earnings in a year",
      ],
    },
    {
      id: 7,
      key: "languageKnowledge",
      label:
        "What is your knowledge of Canada's official languages (English and French)?",
      options: ["Two official languages", "One official language"],
    },
    {
      id: 8,
      key: "languageAbility",
      label:
        "What is your overall official language ability in English and/or French?",
      options: ["CLB 9 or higher", "CLB 8", "CLB 7", "CLB 6 or lower"],
    },
  ];

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
    console.log({ question, value });
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

  const nextQuestion = () => {
    if (selectedValue) {
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [questions[currentQuestionIndex].key]: selectedValue,
      }));
    }
    setSelectedValue("");
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("phd_stream")}</title>
      </Helmet>
      <Content style={contentStyle}>
        <Form
          labelCol={{
            span: 25,
          }}
          wrapperCol={{
            span: 24,
          }}
          layout="vertical"
          size={componentSize}
          style={{
            maxWidth: 600,
          }}
        >
          {/*    Render current question*/}
          <Form.Item label={questions[currentQuestionIndex].label}>
            <Select
              style={{ width: "100%" }}
              value={selectedValue}
              onChange={(value) =>
                handleScoreChange(questions[currentQuestionIndex].key, value)
              }
            >
              {questions[currentQuestionIndex].options.map((option) => (
                <Select.Option key={option} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Navigation buttons*/}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button
              disabled={currentQuestionIndex === 0}
              onClick={prevQuestion}
            >
              Previous
            </Button>
            <Button
              disabled={currentQuestionIndex === questions.length - 1}
              onClick={nextQuestion}
            >
              Next
            </Button>
          </div>
          {/* Modal for Results */}
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <h3>Total Score: {totalScore}</h3>
            <Button onClick={() => setIsModalOpen(true)}>Open Report</Button>
            <Modal
              title="Score Card"
              open={isModalOpen}
              onOk={() => setIsModalOpen(false)}
              onCancel={() => setIsModalOpen(false)}
              width={700}
            >
              <PHDStreamPdf answer={answer} totalScore={totalScore} />
            </Modal>
          </div>
        </Form>
      </Content>
    </>
  );
};

export default PHDStream;
