import React, { Component } from 'react';


export default class AddNewTask  extends Component {
    state = {
        inputValue :"",
    }

    handlechange=(e)=>{
        
        this.setState({inputValue:e.target.value})
    }

    handleSub = () =>{
        const { handleSubmit } = this.props;
        handleSubmit(this.state.inputValue);
        this.setState({
            inputValue: ""
        });
    }

  render() {
    return (
            <div> 
                <input  placeholder="Add Task" 
                onChange={this.handlechange}
                value={this.state.inputValue}>
                
                </input>
                <button
                        onClick={this.handleSub}
                    >
                        Add
                    </button>
            </div>
            );
  }
}
