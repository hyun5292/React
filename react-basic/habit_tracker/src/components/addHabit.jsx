import React, { Component } from 'react';

class AddHabit extends Component {
    inputRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.inputRef.current.value = "";
    };

    handleReset = () => {
        console.log("Reset");
        this.props.onReset();
    };

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit}>
                <input 
                    ref={this.inputRef}
                    className="add-input" 
                    type="text" 
                    placeholder='Habit' 
                />
                <button className="add-button">Add</button>
            </form>
        );
    }
    // state = {
    //     input_value: "",
    // };

    // handleAdd = event => {
    //     console.log("Add");
    //     const nameHabit = this.state.input_value;
    //     this.setState({input_value: ""});
    //     this.props.onAdd(nameHabit);
    // };

    // handleChange = event => {
    //     this.setState({input_value: event.target.value});
    // };

    // render() {
    //     return (
    //         <>
    //             <input 
    //                 className="add-input" 
    //                 name="hName" 
    //                 value={this.state.input_value} 
    //                 onChange={this.handleChange}
    //                 type="text" 
    //                 placeholder='Habit' 
    //             />
    //             <button 
    //                 className="add-button" 
    //                 onClick={this.handleAdd}
    //             >Add</button>
    //         </>
    //     );
    // }
}

export default AddHabit;