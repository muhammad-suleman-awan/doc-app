import React from "react";
import './demo.css'
import DocappComponent from "./DocApp"; 
import TimeLine from './timeLine';
import Appointment from './appointment';  
function Demo() {
  return (
    <div
      className="maindiv"
      style={{
          // backgroundColor:"yellowgreen"
        }}
    >
    
      <div id="stnavbar"
        className="mainsubdiv"
         style={{
          
        }}

      >
        <DocappComponent />
      
      </div>
      <div id="ndtimeline"
        className="mainsubdiv"
       style={{
       
         }}
      > 
      <TimeLine/>
      </div>
      <div id="rdtimeline"
        className="mainsubdiv"
         style={{
        
          }}
      >
         <Appointment/> 
      </div>
      
    </div>
  );
}

export default Demo;
