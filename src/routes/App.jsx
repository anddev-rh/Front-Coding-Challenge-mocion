import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../components/Home';
import Quiz from '../components/Quiz';
import Results from '../components/Results';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/quiz" component={Quiz}/>
        <Route exact path="/results" component={Results}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
