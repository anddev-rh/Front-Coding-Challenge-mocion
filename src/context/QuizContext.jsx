import React, {createContext, useState, useEffect} from 'react';

export const QuizContext = createContext(); 

const QuizContextProvider = (props) => {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetchQuestions();
  })

  const fetchQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    const data = await response.json();
    console.log(data);
  }

  return(
    <QuizContext.Provider>
      {props.children}
    </QuizContext.Provider>
  )

}

export default QuizContextProvider;