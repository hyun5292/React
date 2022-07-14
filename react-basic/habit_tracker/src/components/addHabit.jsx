import React, { Component } from 'react';

class AddHabit extends Component {
    state = {
        input_value: "",
    };

    handleAdd = event => {
        console.log("Add");
        const nameHabit = this.state.input_value;
        this.setState({input_value: ""});
        this.props.onAdd(nameHabit);
    };

    handleChange = event => {
        this.setState({input_value: event.target.value});
    };

    render() {
        return (
            <>
                <input 
                    className="add-input" 
                    name="hName" 
                    value={this.state.input_value} 
                    onChange={this.handleChange}
                    type="text" 
                    placeholder='Habit' 
                />
                <button 
                    className="add-button" 
                    onClick={this.handleAdd}
                >Add</button>
            </>
        );
    }
}

export default AddHabit;