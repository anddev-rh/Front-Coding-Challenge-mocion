import React, { useContext, useEffect, useState} from 'react';
import  {QuizContext} from '../context/QuizContext'
const Quiz = () => {

  const {questions} = useContext(QuizContext);

  const [indexQuestion, setIndexQuestion] = useState(0);
  
  const actualQuestion = questions[indexQuestion];

  
  const nextQuestion = () => {
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
          <button onClick={nextQuestion}>
            True
          </button>
          <button>
            False
          </button>
        </div>

      ): null }

    </div>

  )



  
}

export default Quiz;