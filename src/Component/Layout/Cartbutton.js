import React from 'react'
import CartIcon from '../Carticon/CartIcon'

import classes from './Cartbutton.module.css';



const Cartbutton = () => {
    return (
       <div className ={classes.icon}>
       <CartIcon />  
       </div>         
    )
}

export default Cartbutton
