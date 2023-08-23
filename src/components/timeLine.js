import React from "react";
import { FiClock } from "react-icons/fi";
import { BsPerson, BsTextWrap } from "react-icons/bs";
import { BsCupHotFill } from "react-icons/bs";
import "./timeLine.css";
const TimeLine = () => {
  return (
    <div className="dashboard">
      <div className="htitle">
        <p style={{color:"black"}}>Your dashboard</p>
      </div>
      <div className="subheading">
        <p
          style={{
            marginTop: "75px",
            paddingright: "20px",
            position: "absolute",
            fontSize: "12px",
            fontWeight: "500",
          }}
        >
          Today's timeline
        </p>
      </div>
      <div className="pointmentschedule">
        <div className="pointmentscheduleiterm" style={{border:"none",background:"rgba(230,241,255,255)"}}>
        <p> < FiClock className="icons" 
              style={{ 
                
              }}
            />
          Started shift</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px"}} >06:30 AM</p>
        </div>
        <div className="pointmentscheduleiterm" >
        <p> <BsPerson className="icons" 
              style={{ 
                
              }}
            />
         Appointmrnt</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px", border:"none"}} >06:00 AM</p>
        </div>
        <div className="pointmentscheduleiterm" >
        <p> < BsPerson className="icons" 
              style={{ 
                
              }}
            />
         Appointmrnt</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px", border:"none"}} >07:00 AM</p>
        </div>
        <div className="pointmentscheduleiterm" >
        <p> < BsCupHotFill className="icons" 
              style={{ 
                
              }}
            />
         Break</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px", border:"none"}} >07:30 AM</p>
        </div>
        <div className="pointmentscheduleiterm" style={{ color:"rgba(20,121,255,255)",borderColor:"rgba(20,121,255,255)"}} >
        <p> < BsPerson className="icons" 
              style={{ 
                color:"blue"
              }}
            />
         Appointmrnt</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px", border:"none"}} >07:30 AM</p>
        </div>
        <div className="pointmentscheduleiterm" >
        <p> < BsPerson className="icons" 
              style={{ 
                
              }}
            />
         Appointmrnt</p>
          <p style={{paddingLeft:"100px",fontSize:"10px",marginTop:"5px", border:"none"}} >07:30 AM</p>
        </div>
        <div className="borderLine">
              <hr className="hr"></hr>
        </div>

        <div className="pointmentscheduleiterm" style={{backgroundColor:"rgba(20,121,255,255)"}} >
        <p style={{color:"white",marginLeft:"20px",borderRadius:"5px",}}>  
         End today's shift</p> 
        </div>

        <div className="pointmentscheduleiterm" style={{backgroundColor:"white",    marginTop:"12px"  ,  borderColor: "white",
                backgroundColor:"white",
                color:"black",
                border:"none",
                borderRadius:"5px",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",}} >
        <p style={{color:"black",marginLeft:"20px",fontSize:"10px",fontWeight:"600",}}>  
         Set a reminder</p> 
        </div>
      </div>
      
    </div>

    //     <div
    //       className="container"
    //       style={{
    //    width:"720px",
    //         height: "89.5%",
    //         display:"flex",
    //         flexDirection:"column",
    //         flexWrap:"nowrap",
    //         borderRadius: "0px 30px 30px 0px",
    //         boxShadow: " rgb(38, 57, 77) 0px 20px 30px -20px",
    //         borderRightStyle:"none",
    //         borderRight:"none",
    //        // backgroundColor:"red",
    //     //   minWidth:"-wle",
    //    //   flex:"auto",
    //      //  backgroundColor:"red",
    //        position:"absolute",
    //        marginLeft:"350px",
    //        marginTop:"29px"
    //       }}
    //     >
    //       <h2
    //         style={{
    //           textAlign: "left",
    //        //   fontWeight:"bold",
    //           //font:"-webkit-mini-control",
    //           //fontSize: "24px",
    //        //   fontFamily:"serif",
    //           paddingLeft: "20px",
    //           paddingTop: "30px",
    //           //whiteSpace:"none"
    //           fontSize:"18px",
    //           fontWeight:"800",
    //           //-webkit-text-stroke-width: medium;

    //       //  fontFamily: "'sans-serif"
    //       fontFamily: "Poppins",
    //         }}
    //       >
    //         Your
    //       <br></br>
    //         dashboard
    //       </h2>
    //       <p
    //         style={{
    //           textAlign: "left",
    //           textWrap: "nowrap",
    //           marginTop: "0px",
    //           fontFamily: "Poppins",
    //           paddingLeft: "20px",
    //           fontSize: "10px",
    //           fontFamily: "sans-serif",
    //           width: "50px",
    //         }}
    //       >
    //         Today's timeline
    //       </p>

  

    //       <div
    //         style={{
    //           marginTop: "8px",
    //           marginLeft: "20px",
    //           width:"150px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >
    //         <BsPerson
    //           style={{
    //             width: "11px",
    //             marginRight:"120px",
    //             justifyContent: "center",
    //             textAlign: "center",
    //             alignItems: "center",
    //             marginTop: "-2px",
    //           }}
    //         />

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "6px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "8px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //             border: "groove",
    //             borderColor: "#0000000d",
    //           }}
    //         >
    //           Appointment &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 06:30 AM
    //         </p>
    //       </div>

    //       <div
    //         style={{
    //           marginTop: "-9px",
    //           marginLeft: "20px",
    //           width:"150px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >
    //         <BsPerson
    //           style={{
    //             width: "11px",
    //             marginRight:"120px",
    //             justifyContent: "center",
    //             textAlign: "center",
    //             alignItems: "center",
    //             marginTop: "-2px",
    //           }}
    //         />

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "6px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "8px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //             border: "groove",
    //             borderColor: "#0000000d",
    //           }}
    //         >
    //           Appointment &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 07:00 AM
    //         </p>
    //       </div>

    //       <div
    //         style={{
    //           marginTop: "-9px",
    //           marginLeft: "20px",
    //           width:"150px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >
    //         <BsCupHotFill
    //           style={{
    //             width: "11px",
    //             marginRight:"120px",
    //             justifyContent: "center",
    //             textAlign: "center",
    //             alignItems: "center",
    //             marginTop: "-2px",
    //           }}
    //         />

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "6px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "8px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //             border: "groove",
    //             borderColor: "#0000000d",
    //           }}
    //         >
    //           Break &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 07:30 AM
    //         </p>
    //       </div>
    //       <div
    //         style={{
    //           marginTop: "-9px",
    //           marginLeft: "20px",
    //           width:"150px",
    //           height:"25px",
    //        borderRadius:"8px",
    //        backgroundColor:"white"
    //         }}
    //       >
    //         <BsPerson
    //           style={{
    //             width: "11px",
    //             marginRight:"120px",
    //             justifyContent: "center",
    //             textAlign: "center",
    //             alignItems: "center",
    //             marginTop: "-2px",
    //             color:"blue"
    //           }}
    //         />

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "6px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "8px",
    //             border: "none",
    //             color:"blue",
    //             fontWeight:"bold",
    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //             border: "groove",
    //             borderColor: "BLUE",
    //           }}
    //         >
    //           Appointment &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 07:30 AM
    //         </p>
    //       </div>
    //       <div
    //         style={{
    //           marginTop: "6px",
    //           marginLeft: "20px",
    //           width:"150px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >
    //         <BsPerson
    //           style={{
    //             width: "11px",
    //             marginRight:"120px",
    //             justifyContent: "center",
    //             textAlign: "center",
    //             alignItems: "center",
    //             marginTop: "-2px",

    //           }}
    //         />

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "6px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "8px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //             border: "groove",
    //             borderColor: "#0000000d",
    //           }}
    //         >
    //           Appointment &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp; 07:30 AM
    //         </p>
    //       </div>

    //       <div
    //         style={{
    //           borderTopStyle: "ridge",
    //           width: "6%",
    //           height: "30px",
    //           marginLeft: "70px",
    //           marginTop: "-4spx",
    //           marginBottom:"8px"
    //         }}
    //       ></div>

    // <div
    //         style={{

    //           marginLeft: "20px",
    //           width:"150px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "23px",
    //             paddingTop: "3px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "10px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "25px",
    //             border: "groove",
    //             borderColor: "blue",
    //             backgroundColor:"blue",
    //             color:"white"
    //           }}
    //         >
    //           End today's shift  </p>
    //       </div>

    //       <div
    //         style={{
    //           marginTop:"15px",
    //           marginLeft: "20px",
    //           width:"150px",
    //           height:"12px",
    //        borderRadius:"8px",
    //       //  backgroundColor:"red"
    //         }}
    //       >

    //         <p
    //           style={{

    //             textWrap: "nowrap",
    //             borderStyle: "ridge",

    //             height: "25px",
    //             paddingTop: "4px",
    //             textAlign: "center",
    //             borderRadius: "8px",
    //             fontFamily: "Poppins",
    //             fontSize: "11px",
    //             border: "none",

    //             paddingRight: "50px",
    //             marginTop: "-24px",
    //             paddingLeft: "28px",
    //            // border: "groove",
    //             borderColor: "white",
    //             backgroundColor:"white",
    //             color:"black",
    //             boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    //           }}
    //         >
    //            Set a reminder  </p>
    //       </div>

    //     </div>
  );
};

export default TimeLine;
