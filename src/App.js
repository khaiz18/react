import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
render(){
return (

  <div className="App">
    <h1> Hi, I'm a React App</h1>
    <p>This is really working!</p>
    <Person name="Keith" age="29" ></Person>
  </div>


      );
 //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
    }

  }
export default App;




