import React, { Component } from 'react';
import AddNewTask from './AddNewTask '

export default class ToDo extends Component {
    state = {
        inputValue:''
    }

    handleSubmit = (value) =>{
        this.setState({inputValue:value})
        
    }
  render() {
    return (
        

        <div>
            <AddNewTask handleSubmit={this.handleSubmit}></AddNewTask>
            
            <h1>{this.state.inputValue}</h1>
            {console.log('inputvalue',this.state.inputValue )}
            
        </div>

    );
  }
}
