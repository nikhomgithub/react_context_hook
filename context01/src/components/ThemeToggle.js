import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class ThemeToggle extends Component {
    static contextType = ThemeContext; //=> this.context

    render() { 

        const {toggleTheme} = this.context;
        return (  
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        );
    }
}
 
export default ThemeToggle;