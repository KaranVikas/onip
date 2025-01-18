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
      text: "Work Experience",
      answer: "",
      options: ["Red", "Blue", "Green", "Yellow"],
    },
    {
      id: 2,
      text: "What is your favorite animal?",
      answer: "",
      options: ["Dog", "Cat", "Elephant", "Tiger"],
    },
    {
      id: 3,
      text: "What is your favorite food?",
      answer: "",
      options: ["Pizza", "Sushi", "Burger", "Salad"],
    },
    {
      id: 4,
      text: "What is your favorite food?",
      answer: "",
      options: ["Pizza", "Sushi", "Burger", "Salad"],
    },
    {
      id: 5,
      text: "What is your favorite food?",
      answer: "",
      options: ["Pizza", "Sushi", "Burger", "Salad"],
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
    console.log("calculateScore");
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
            {question.options.map((option, optionIndex) => (
              <Select.Option key={optionIndex} value={option}>
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
                ? "Calculate Score"
                : "Next"}
            </Button>
          )}
        </div>
      ))}
    </div>
  );
};

export default InSteam;
