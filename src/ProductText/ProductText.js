import React from 'react'
import classes from './ProductText.css';

const ProductText = (props) => {

    return (
        <div className ={classes.ProductText}>
            <div className ={classes.title}>{props.title}</div>
            <div className ={classes.about}>{props.about}</div>
            <div className ={classes.price}>&#x20A6;{props.price}</div>
        </div>
    )
}


export default ProductText
