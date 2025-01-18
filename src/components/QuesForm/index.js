export { default } from './QuesForm' 


// {currentStep === 4 && (
//   <>
//     <h3>What is your favorite hobby?</h3>
//     <select
//       onChange={(e) =>
//         handleAnswer(e.target.value, e.target.selectedIndex + 5)
//       }
//       defaultValue=""
//     > 
//       <option value="" disabled>
//         Select an option
//       </option>
//       <option value="Reading">Reading (Score: 5)</option>
//       <option value="Traveling">Traveling (Score: 10)</option>
//       <option value="Gaming">Gaming (Score: 7)</option>
//     </select>
//   </>

// {currentStep === 3 && (
//   <>
//     <h3>Why do you like Blue?</h3>
//     <label>
//       <input
//         type="radio"
//         name="reasonBlue"
//         value="It is calming"
//         onClick={() => handleAnswer("It is calming", 6)}
//       />
//       It is calming (Score: 6)
//     </label>
//     <br />
//     <label>
//       <input
//         type="radio"
//         name="reasonBlue"
//         value="It is cool"
//         onClick={() => handleAnswer("It is cool", 9)}
//       />
//       It is cool (Score: 9)
//     </label>
//   </>
// )}