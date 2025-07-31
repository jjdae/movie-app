import React from 'react';
import { NavLink, Link} from 'react-router-dom';
import { SiThemoviedatabase } from "react-icons/si";
const Header = () => {
    const activeStyle={color:'#6b8e23'}
    return (
        <header className='header'>
            <h1 className='logo'><Link to="/"><SiThemoviedatabase /></Link></h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" style={({isActive})=>(isActive? activeStyle : undefined)}>Home</NavLink>
                    </li>
                   
                    <li> <NavLink to="/drama" style={({isActive})=>(isActive? activeStyle : undefined)}>Drama</NavLink></li>  

                     <li> <NavLink to="/sports" style={({isActive})=>(isActive? activeStyle : undefined)}>comedy</NavLink></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;