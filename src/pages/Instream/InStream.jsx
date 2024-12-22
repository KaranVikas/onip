import React, { useState } from "react";

const InSteam = () => {
  // Array of questions
  const questions = [
    "What is your name?",
    "What is your favorite color?",
    "Where do you live?",
    "What is your favorite hobby?",
  ];

  // State to track answers
  const [answers, setAnswers] = useState([]);
  const [visibleQuestions, setVisibleQuestions] = useState([0]); // Start with the first question visible

  // Handle answer submission
  const handleAnswerSubmit = (event, questionIndex) => {
    event.preventDefault();
    const answer = event.target.elements.answer.value;
    if (answer.trim()) {
      const updatedAnswers = [...answers];
      updatedAnswers[questionIndex] = answer; // Update the answer for the current question
      setAnswers(updatedAnswers);

      // Show the next question if available
      if (questionIndex < questions.length - 1) {
        setVisibleQuestions([...visibleQuestions, questionIndex + 1]);
      }
      event.target.reset();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Answer the Questions</h2>
      {visibleQuestions.map((questionIndex) => (
        <div key={questionIndex} style={{ marginBottom: "20px" }}>
          <form onSubmit={(event) => handleAnswerSubmit(event, questionIndex)}>
            <p>
              <strong>Q{questionIndex + 1}:</strong> {questions[questionIndex]}
            </p>
            {answers[questionIndex] ? (
              <p>
                <strong>Answer:</strong> {answers[questionIndex]}
              </p>
            ) : (
              <>
                <input
                  type="text"
                  name="answer"
                  placeholder="Type your answer"
                  required
                />
                <button type="submit">Next</button>
              </>
            )}
          </form>
        </div>
      ))}
    </div>
  );
};

export default InSteam;
