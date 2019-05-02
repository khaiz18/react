import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
 
  state = {

       persons: [
        {name:"Leo", age: "21" },
        {name:"clark", age:"43"},
        {name:"Jenny", age:"26"}

       ]

  }

  render(){

return (

  <div className="App">
    <h1> Hi, I'm a React App</h1>
    <p>This is really working!</p>
    <button>Switch name</button>
    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
    <Person name={this.state.persons[1].name} age={this.state.persons[1].name}>I love money!</Person>
    <Person name={this.state.persons[2].name} age={this.state.persons[2].name} />
  </div>


      );
 //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does this work now?'))
    }

  }
export default App;




