import React from 'react';
import Cartbutton from './Cartbutton';

import classes from './Header.module.css';
import Profilepic from './Profilepic';

const Header = () => {
    return (
        <div >
            <header className = {classes.header}>
                <h2 className = {classes.headername}>LAPTOP GENIUS</h2>
                <nav >
                    <ul>
                        <li>collections</li>
                        <li>Dell</li>
                        <li>Alienware</li>
                        <li>services</li>
                        <li>contact</li>
                    </ul>
                </nav>  
               <Cartbutton/>
               <Profilepic/>
            </header>
           
        </div>
    )
}

export default Header
