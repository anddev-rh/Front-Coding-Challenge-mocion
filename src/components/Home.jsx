import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Home.css'
const Home = () => {
  return (
    <div>
      <h1>Welcome to the trivia Challenge!</h1>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100%?</p>
      <Link to="/quiz" className="link">
        BEGIN
      </Link>
    </div>
  

  )
}

export default Home;