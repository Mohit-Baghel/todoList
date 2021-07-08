import React,{Fragment}from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Task from './components/Task';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Create_task from './components/Create_task';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Task}/>
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
