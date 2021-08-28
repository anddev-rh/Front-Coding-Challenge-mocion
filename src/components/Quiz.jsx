import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import  {QuizContext} from '../context/QuizContext';
const Quiz = () => {

  const {questions, deleteFromRightAnswers, fetchQuestions} = useContext(QuizContext);

  const [indexQuestion, setIndexQuestion] = useState(0);
  
  const actualQuestion = questions[indexQuestion];

  useEffect(() => {
    fetchQuestions();
  }, [])

  const isRightAnswer = (userAnswer) => {
    
    const dataRightAnswer = actualQuestion.correct_answer;
  
    if(dataRightAnswer === "True" && userAnswer === true) {
      return true
    } else if (dataRightAnswer === "False" && userAnswer === false) {
      return true
    } else {
      return false
    }
  }

  const handleAnswer = (userAnswer) => {    
    if (!isRightAnswer(userAnswer)){  
      deleteFromRightAnswers(actualQuestion.question);
    } 
    setIndexQuestion(indexQuestion + 1);
  }
  






  return (  

    
    <div>



      {actualQuestion ? (

        <div>
          <h1>{actualQuestion.category}</h1>
            <div>
              <p>{actualQuestion.question}</p>
            </div>
          <p>{indexQuestion + 1} of 10</p>
          <button onClick={() => {handleAnswer(true)}}>
            True
          </button>
          <button onClick={() => {handleAnswer(false)}}>
            False
          </button>

          
        </div>

      ): null }

      {indexQuestion === 10 &&  <Link to="/results"> Go to results</Link> }

    </div>

  )



  
}

export default Quiz;