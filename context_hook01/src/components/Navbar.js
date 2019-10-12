import React, { useContext } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const {isAuth,toggleAuth} = useContext(AuthContext);
    const {isLightTheme,light,dark} = useContext(ThemeContext);
   
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
}
 
export default Navbar;