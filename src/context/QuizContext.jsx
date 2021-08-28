import React, {createContext, useState, useEffect} from 'react';

export const QuizContext = createContext(); 

const QuizContextProvider = (props) => {

  const [questions, setQuestions] = useState([]);

  const [rightAnswers, setRightAnswers] = useState([]);

  // useEffect(() => {
  //   fetchQuestions();
  // }, [])

  



  const fetchQuestions = async () => {
    const response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean")
    const data = await response.json();
    setQuestions(data.results)
    setRightAnswers(data.results)
  }

  const deleteFromRightAnswers = (question) => {
    setRightAnswers(rightAnswers.filter(answer => answer.question !== question))
  }



  return(
    <QuizContext.Provider value = {{questions, setQuestions, deleteFromRightAnswers, rightAnswers, fetchQuestions}}>
      {props.children}
    </QuizContext.Provider>
  )

}

export default QuizContextProvider;