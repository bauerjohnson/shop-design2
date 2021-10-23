import React from 'react';
import classes from './Smallimages.module.css'
import Dell1 from '../assets/dellG-1.jpg';
import Dell2 from '../assets/dellG-2.jpg';
import Dell3 from '../assets/dellG-3.jpg';
import Dell4 from '../assets/dellG-4.jpg';
// import { Usefirst, UseSecond } from '../../zcontext/Zcontext';




const Imageprops = (props) => {
    // const [image, setimage] = useState(false)

//     const firstState = Usefirst()
// const SecondState = UseSecond()

// const imagehandler = () => {
//     setimage(true)



// switch(imagehandler) {
//     case (clicked1) :
//         console.log('clicked')
//         break;
//         case (clicked2) : 
//         console.log('second class upper')
//         break;
//         case (clicked3) : 
//         console.log('second class lower')
//         break;
//         case (clicked4): 
//         console.log('third class')
//         break;
//         case 1.00 : {
//             console.log('pass')
//             break;
//         }
//         default : console.log('result not found')
// } 

// }

const imagecLICKhandler1 = (Dell1) => {
    props.oNreceieved1(Dell1)
    console.log('IMAGE1')
}



    const imagecLICKhandler2 = (Dell2) => {
        props.oNreceieved2(Dell2)
    }

    const imagecLICKhandler3 = (Dell3) => {
       props.oNreceieved3(Dell3)
    }

    const imagecLICKhandler4 = (Dell4) => {
        props.oNreceieved4(Dell4)
    }

    

    

    return (
        <div className ={classes.imageall}>
        <img className ={classes.Mainimage} src={!Dell1} alt='dellG1' />
            <div className ={classes.imageprops}>
            <img onClick ={imagecLICKhandler1}  src={Dell1} alt='dellG1' />
            <img  onClick ={imagecLICKhandler2} src={Dell2} alt='dellG2' />
            <img  onClick ={imagecLICKhandler3} src={Dell3} alt='dellG3' />
            <img onClick ={imagecLICKhandler4} src={Dell4} alt='dellG4' />
            
            </div>
        </div>
    )
}

export default Imageprops
