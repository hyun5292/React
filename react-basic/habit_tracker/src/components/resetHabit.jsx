import React, { Component } from 'react';

class ResetHabit extends Component {
    handleReset = () => {
        console.log("Reset");
        this.props.onReset();
    };

    render() {
        return (
            <button className="habits-reset" onClick={this.handleReset}>Reset All</button>
        );
    }
}

export default ResetHabit;