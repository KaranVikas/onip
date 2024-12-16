import React, { useState } from "react";

const Dyanform = () => {
  const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const [answers, setAnswers] = useState([]); // Store answers
  const [score, setScore] = useState(0); // Track total score

  // Handle answer selection
  const handleAnswer = (selectedAnswer, answerScore) => {
    // Update the answers list
    setAnswers((prevAnswers) => [
      ...prevAnswers.slice(0, currentStep - 1), // Remove any future steps
      { step: currentStep, answer: selectedAnswer, score: answerScore },
    ]);

    // Update the total score
    setScore((prevScore) => prevScore + answerScore);

    // Move to the next step
    if (currentStep === 1) {
      if (selectedAnswer === "Red") setCurrentStep(2);
      else setCurrentStep(3); // Blue
    } else if (currentStep === 2 || currentStep === 3) {
      setCurrentStep(4); // Final question
    } else if (currentStep === 4) {
      alert("Form Complete! Total Score: " + (score + answerScore));
      setCurrentStep(1); // Reset form
      setAnswers([]);
      setScore(0);
    } 
  };

  // Handle navigation to edit a previous step
  const handleEditStep = (step) => {
    const currentAnswer = answers.find((a) => a.step === step);
    if (currentAnswer) {
      setScore((prevScore) => prevScore - currentAnswer.score); // Remove score of edited step
    }
    setCurrentStep(step);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dynamic Form with If-Else</h2>

      {/* Display previously answered questions */}
      <div>
        <h3>Answered Questions</h3>
        {answers.map(({ step, answer }) => (
          <div key={step}>
            <strong>Question {step}:</strong>
            <p>Answer: {answer}</p>
            <button
              onClick={() => handleEditStep(step)}
              style={{
                margin: "5px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>
          </div>
        ))}
      </div>

      {/* Current Question */}
      <div style={{ marginTop: "20px" }}>
        {currentStep === 1 && (
          <>
            <h3></h3>
            <button
              onClick={() => handleAnswer("Red", 5)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              Red (Score: 5)
            </button>
            <button
              onClick={() => handleAnswer("Blue", 10)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              Blue (Score: 10)
            </button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <h3>Why do you like Red?</h3>
            <button
              onClick={() => handleAnswer("It is vibrant", 7)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              It is vibrant (Score: 7)
            </button>
            <button
              onClick={() => handleAnswer("It is bold", 8)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              It is bold (Score: 8)
            </button>
          </>
        )}
        {currentStep === 3 && (
          <>
            <h3>Why do you like Blue?</h3>
            <button
              onClick={() => handleAnswer("It is calming", 6)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              It is calming (Score: 6)
            </button>
            <button
              onClick={() => handleAnswer("It is cool", 9)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              It is cool (Score: 9)
            </button>
          </>
        )}
        {currentStep === 4 && (
          <>
            <h3>What is your favorite hobby?</h3>
            <button
              onClick={() => handleAnswer("Reading", 5)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              Reading (Score: 5)
            </button>
            <button
              onClick={() => handleAnswer("Traveling", 10)}
              style={{ margin: "5px", padding: "10px 20px", cursor: "pointer" }}
            >
              Traveling (Score: 10)
            </button>
          </>
        )}
      </div>

      {/* Display total score */}
      <div style={{ marginTop: "20px" }}>
        <h3>Total Score: {score}</h3>
      </div>
    </div>
  );
};

export default Dyanform;
