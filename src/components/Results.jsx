import React, {useContext} from 'react';
import  {QuizContext} from '../context/QuizContext';
import { Link } from 'react-router-dom'
import Home from './Home';

const Results = () => {

  const {questions, rightAnswers} = useContext(QuizContext);

  return (
    <div>
      <h1>You scored</h1>
      <h2>{rightAnswers.length} / 10</h2>

      <ul>
        {questions.map(q => {
          return(<li>
            {q.correct_answer === "True" && <p>+</p> }
            {q.correct_answer === "False" && <p>-</p> }
            {q.question}
          </li>)

        })}
      </ul>

      
      <Link to="/">PLAY AGAIN?</Link>

    </div>
  )
}

export default Results;