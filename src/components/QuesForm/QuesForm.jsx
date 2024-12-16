import React, { useState } from 'react'

const QuesForm = () => {
  // const [currStep, setCurrStep ] = useState(1); // track the step
  // const [ans , setAns ] = useState([]); // store answer
  // const [score, setScore] = useState(0); //set total score  
  
  // // answer selection
  // const handleScore = (setAns , ansScore ) => {
  //   //update the answer list
  //   setAns((prevAnswers) => [
  //     ...prevAnswers.slice(0, currentStep - 1) , 
  //     // remove any future steps
  //     { step: currStep, answer: selectedAnswer, score: ansScore },
  //   ])

  //   //update the total score 
  //   setScore((prevScore) => prevScore + ansScore);

  //   //move to the next step
  //   if(curr === 1){
  //     if(selectedAnswer === 'red') setCurrentStep(2);
  //     else setCurrStep(3); //blue
  //   }
  //   else if(curr === 2 || curr === 3){
  //     setCurrStep(4); // final question
  //   }
  //   else if(currStep === 4){
  //     alert("Form complete! total score:  " + (score + ansScore));
  //     setCurrStep(1) // reset form
  //     setAns([]);
  //     setScore(0);
  //   }

  // }

  return (
    <div> QuesForm </div>
  )
}

export default QuesForm