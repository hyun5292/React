import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const totalCnt = this.props.totalCnt;

        return (
            <nav>
                <i className="navbar-logo fa-solid fa-leaf"></i>
                <span>Habit Tracker</span>
                <span className="navbar-count">{totalCnt}</span>
            </nav>
        );
    }
}

export default Navbar;