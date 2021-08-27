import React, { useEffect, useState} from 'react';

const Quiz = () => {



  useEffect(() => {
    fetchQuestions();
  })

  const fetchQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    const data = await response.json();
    console.log(data);
  }



  return (
    <p>quiz</p>
  )
}

export default Quiz;