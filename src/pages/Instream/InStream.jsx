import { useState } from "react";
import { Button, Select } from "antd";

const contentStyle = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  padding: "20px 50px",
  overflow: "scroll",
};

const InSteam = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is your current work or study permit status?",
      answer: "",
      option: {
        "With valid work permit": 10,
        "Without valid work permit": 0,
      },
    },
    {
      id: 2,
      text: "What is your highest level of education?",
      answer: "",
      option: {
        "Less than college or trade certificate": 0,
        "Apprenticeship or trades certificate or diploma": 5,
        "Undergraduate diploma or certificate": 5,
        "Graduate diploma or certificate": 6,
        "Bachelors or equivalent": 6,
        Masters: 8,
        PhD: 10,
      },
    },
    {
      id: 3,
      text: "What was the field of study of your educational credential?",
      answer: "",
      option: {
        "STEM/health (engineering, health, math, computer science)": 12,
        "Business and administration, social, legal, education, behavioral science, personal, security and transport services,social work and related programs": 6,
        "Trades (agriculture and natural resources operations and management, mechanics and repair, architecture, construction and precision production)": 0,
        "Arts and humanities, business, humanities, arts, social science and education (BHASE) programs, not elsewhere classified (n.e.c)": 0,
      },
    },
    {
      id: 4,
      text: "What is your Canadian education experience?",
      answer: "",
      option: {
        "More than one Canadian credential": 10,
        "One Canadian credential": 5,
        None: 0,
      },
    },
    {
      id: 5,
      text: "Where did you Study in Ontario??",
      answer: "",
      option: {
        "Northern Ontario": 10,
        "Other areas outside Greater Toronto Area (except Northern Ontario)": 8,
        "Greater Toronto Area excluding Toronto": 3,
        Toronto: 0,
      },
    },
    {
      id: 6,
      text: "What is your highest Canadian earnings history in a single tax year?",
      answer: "",
      option: {
        "Less than $40k earnings in a year": 0,
        "More than $40k earnings in a year": 3,
      },
    },
    {
      id: 7,
      text: "What is your knowledge of Canada's official languages (English and French)?",
      answer: "",
      option: {
        "Two official languages": 10,
        "One official language": 5,
      },
    },
    {
      id: 8,
      text: "What is your overall offical language ability in English and/or French?",
      answer: "",
      option: {
        "CLB 9 or higher": 10,
        "CLB 8": 8,
        "CLB 7": 6,
        "CLB 6 or lower": 0,
      },
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleAnswerChange = (index, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].answer = value;
    setQuestions(updatedQuestions);
    console.log({ updatedQuestions });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      console.log("Current Question", currentQuestionIndex);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
    console.log(currentQuestionIndex);
  };

  const calculateScore = () => {
    const score = questions.reduce((total, question) => {
      return total + (question.option[question.answer] || 0);
    }, 0);
    console.log("Total score: ", score);
  };

  return (
    <div style={contentStyle}>
      <h1>Quiz</h1>
      {questions.slice(0, currentQuestionIndex + 1).map((question, index) => (
        <div key={question.id} style={{ marginBottom: "10px" }}>
          <h3>{question.text}</h3>
          <Select
            style={{ width: "100%" }}
            value={question.answer}
            onChange={(value) => handleAnswerChange(index, value)}
          >
            {Object.keys(question.option).map((option, index) => (
              <Select.Option key={index} value={option}>
                {option}
              </Select.Option>
            ))}
          </Select>
          {currentQuestionIndex === index && (
            <Button
              onClick={
                currentQuestionIndex === questions.length - 1
                  ? calculateScore
                  : handleNextQuestion
              }
            >
              {currentQuestionIndex === questions.length - 1
                ? `Calculate Score`
                : "Next"}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default InSteam;
