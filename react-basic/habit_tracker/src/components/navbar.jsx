import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <header>
                <i className="navbar-logo fa-solid fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{this.props.totalCnt}</span>
            </header>
        );
    }
}

export default Navbar;