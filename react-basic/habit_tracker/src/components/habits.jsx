import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    /*
    handleIncrement = habit => {
        console.log("habits Increment");
        this.props.onIncrement(habit);
    };

    handleDecrement = habit => {
        console.log("habits Decrement");
        this.props.onDecrement(habit);
    };

    handleDelete = habit => {
        console.log("habits Delete");
        this.props.onDelete(habit);
    };
    */

    render() {
        const habits = this.props.habits;
        return (
            <ul>
                {
                    habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            // onIncrement={this.handleIncrement}
                            // onDecrement={this.handleDecrement}
                            // onDelete={this.handleDelete}
                            onIncrement={this.props.onIncrement}
                            onDecrement={this.props.onDecrement}
                            onDelete={this.props.onDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;