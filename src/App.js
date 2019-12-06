import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Task4 from './Components/Task4';
import Task2 from './Components/Task2';
import Task3 from './Components/Task3';
import Navbar from './Navbar/Navbar';


function App() {
  return (
    <div className="App">
      
 
      <Router>
       <switch>
         <Route exact path='/' component={Task2}></Route>
         <Route exact path='/task3' component={Task3}></Route>
         <Route exact path='/task4' component={Task4}></Route>
         </switch>
     </Router>
    </div>
  );
}

export default App;
