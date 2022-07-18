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
        return (
            <>
                <ul>
                    {
                        this.props.habits.map(habit => (
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
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
}

export default Habits;