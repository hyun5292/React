import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
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