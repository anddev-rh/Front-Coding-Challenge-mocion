import React, { useContext, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import  {QuizContext} from '../context/QuizContext';

import './styles/Quiz.css'
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

        <div className="question-container" >
          <h1>{actualQuestion.category}</h1>
            
          <p dangerouslySetInnerHTML={{__html: actualQuestion.question}}></p>
          
          <p>{indexQuestion + 1} of 10</p>
          <button onClick={() => {handleAnswer(true)}}>
            True
          </button>
          <button onClick={() => {handleAnswer(false)}} className="false">
            False
          </button>

          
        </div>

      ): null }

      {indexQuestion === 10 &&  <Link to="/results" className="link"> Go to results</Link> }

    </div>

  )



  
}

export default Quiz;