import React, { Component } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

class Navbar extends Component {
    //Method 1. <ThemeContext.Consumer>

    render() { 
        
        return(
            <AuthContext.Consumer>{(authcontext)=>(
                <ThemeContext.Consumer>{(themecontext)=>{
                    const {isAuth,toggleAuth} = authcontext;
                    const {isLightTheme,light,dark} = themecontext;
                    const theme = isLightTheme?light:dark;
                    
                    return (  
                        <nav style={{color:theme.syntax,background:theme.ui}}>
                            <h1>Context App</h1>
                            <div>{isAuth? 'Logged In' : 'Logged Out'}</div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li onClick={toggleAuth}>Toggle Auth</li>
                            </ul>
                        </nav>
                    );
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
            
        )       
    }
}





 
export default Navbar;