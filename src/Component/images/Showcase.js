import React from 'react'
import Card from '../UI/Card'


import classes from './Showcase.css'

import Mainimage from './Mainimage.js/Mainimage'

const Showcase = () => {
    return (
        <Card>
        <div className ={classes.Showcase}>
         <Mainimage/>
        </div>
        </Card>
    )
}

export default Showcase;
