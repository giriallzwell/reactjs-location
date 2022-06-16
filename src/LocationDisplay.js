import React from 'react'
import northPic from './images/north.jpg';
import southPic from './images/south.jpg';
import './LocationDisplay.css';

const locationconfig ={
    North : {
        text : 'ho,you are currently in North region.',
        picture : northPic
    },
    South : {
        text : 'ho,you are currently in south region.',
        picture : southPic
    }
}

 const LocationDisplay = ({latitude}) =>
 {
     var region = (latitude > 0)?'North':'South';
     const{ text,picture}=locationconfig[region]

     return(
         <div className={region}>
         <div className ='ui raised text conatiner segment'>
             <div className ='image'>
         <img src ={picture} alt ="location picture"/>
         </div> 
         <div className ='ui teal bottom attached label'>
          {text}
          </div>
         </div>
         </div>
     )
 }

 export default LocationDisplay;
