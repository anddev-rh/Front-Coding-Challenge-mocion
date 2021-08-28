import React, {useContext} from 'react';
import  {QuizContext} from '../context/QuizContext';
import { Link } from 'react-router-dom'
import Home from './Home';

import './styles/Results.css'

const Results = () => {

  const {questions, rightAnswers} = useContext(QuizContext);

  return (
    <div className="results-container">
      <h1>You scored</h1>
      <h2>{rightAnswers.length} / 10</h2>

      <ul>
        {questions.map(q => {
          return(<li className="result-item">
            {q.correct_answer === "True" && <span className="result-item--sign">+</span> }
            {q.correct_answer === "False" && <span className="result-item--sign">-</span> }
            <span className="result-item--question">{q.question}</span>
          </li>)

        })}
      </ul>

      
      <Link to="/" className="link link-results">PLAY AGAIN?</Link>

    </div>
  )
}

export default Results;