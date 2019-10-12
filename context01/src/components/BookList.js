import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext'

class BookList extends Component {
    //Method 2. use contextType

    static contextType = ThemeContext; //=> this.context
    
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme= isLightTheme ?light:dark;
        
        return (  
            <div className='book-list' style={{color:theme.syntax,background:theme.bg}}>
                <ul>
                    <li style={{background:theme.ui}}>Book 1</li>
                    <li style={{background:theme.ui}}>Book 2</li>
                    <li style={{background:theme.ui}}>Book 3</li>
                </ul>
            </div>   
        );
    }
}
 
export default BookList;