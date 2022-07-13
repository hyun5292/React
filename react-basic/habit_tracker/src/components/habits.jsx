import React, { Component } from 'react';
import Habit from './habit';

class Habits extends Component {
    handleIncrement = () => {
        this.props.onIncrement(this.props.habit);
    };

    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    };

    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    };

    render() {
        const habits = this.props.habits;
        return (
            <ul>
                {
                    habits.map(habit => (
                        <Habit 
                            key={habit.id} 
                            habit={habit} 
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default Habits;