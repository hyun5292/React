import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import Add from './components/addHabit';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    habits: [
        { id: 1, name: 'Reading', count: 0 },
        { id: 2, name: 'Running', count: 0 },
        { id: 3, name: 'Coding', count: 0 },
    ],
  };

  handleAdd = (habitName) => {
    const lastId = this.state.habits.length + 1;
    const newHabit = {id: lastId, name: habitName, count: 0};
    const habits = [...this.state.habits, newHabit];
    this.setState({ habits });
  };

  handleIncrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      
      return item;
    });
    this.setState({ habits });
  };

  handleDecrement = (habit) => {
    const habits = this.state.habits.map(item => {
      if(item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count };
      }
      
      return item;
    });
      this.setState({ habits });
  };

  handleDelete = (habit) => {
      const habits = [...this.state.habits];
      const index = habits.indexOf(habit);
      habits.splice(index, 1);
      //const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({ habits });
  };
  
  handleReset = () => {
      const habits = this.state.habits.map(habit => {
        habit.count = 0;
        return habit;
      });
      this.setState({ habits });
      // const habits = [];
      // this.setState({ habits });
  };

  render() {
    return ( 
      <>
        <Navbar 
          totalCnt={this.state.habits.filter(item => item.count > 0).length}
        />
        <Add onAdd={this.handleAdd}></Add>
        <Habits 
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    )
  }
}

export default App;
