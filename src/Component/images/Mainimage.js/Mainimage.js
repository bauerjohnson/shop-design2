import React, {useState} from 'react'
import Smallimages from '../Smallimages';
import classes from './Mainimage.module.css'
import Dell1 from '../../assets/dellG-1.jpg';
import Dell2 from '../../assets/dellG-2.jpg';
import Dell3 from '../../assets/dellG-3.jpg';
import Dell4 from '../../assets/dellG-4.jpg';


const Mainimage = (props) => {
    const [image, setimage] = useState(false)
    const [image2, setimage2] = useState(false)
    const [image3, setimage3] = useState(false)
    const [image4, setimage4] = useState(false)

    

    const receiveimage1 = imagereceieve1 => {
        console.log(imagereceieve1)
        setimage(true);
       
    }

    const receiveimage2 = imagereceieve2 => {
        console.log(imagereceieve2)
        setimage2(previmage => !previmage)
    }

    const receiveimage3= imagereceieve3 => {
        console.log(imagereceieve3);
        setimage3(true)
    }

    const receiveimage4 = imagereceieve4 => {
        console.log(imagereceieve4)
        setimage4(true)
    }
    
    return (
        <div>
        <div className={classes.Mainimage}>
      {<img src={image ? '' : Dell1}alt=""/>}
      {<img src={image ? Dell1 : ''}alt=""/>}
      {<img src={image2 ? Dell2 : ''}alt=""/>}
      {<img src={image3 ? Dell3 : ''}alt=""/>}
      {<img src={image4 ? Dell4 : ''}alt=""/>}
</div>
            <Smallimages oNreceieved1 ={receiveimage1}
                         oNreceieved2 ={receiveimage2}
                         oNreceieved3 ={receiveimage3}
                         oNreceieved4 ={receiveimage4}
                        />
        </div>
    )
}

export default Mainimage
