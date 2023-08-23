import React from "react";
// import dp from "../src/images";
import "bootstrap/dist/css/bootstrap.css";
import { CgDetailsMore } from "react-icons/cg";
import { AiOutlineCalendar } from "react-icons/ai";
import { RiSettingsLine } from "react-icons/ri";
import { tbpictureinpicturetop } from "react-icons/tb";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { RxFontFamily, RxPadding } from "react-icons/rx";
import { BsFillCircleFill } from "react-icons/bs";
import "./DocappComponent.css";

const DocappComponent = () => {
  return (
    <div className="mainnav" >
      <div className="title">
        <p>DocApp</p>
      </div>
      <div className="btnNav" style={{ marginTop: "30px", paddingTop: "0px" }}>
        <div
          id="hmainnavitems"
          className="mainnavitems"
          style={{ marginTop: "px", paddingTop: "0px" }}
        >
          <button style={{backgroundColor:"rgba(20,121,255,255)" }}>
            <CgDetailsMore style={{ color: "white",marginTop:"-5px"  }} />
          </button>
          <p>Dashboard</p>
        </div>
        <div id="hmainnavitems" className="mainnavitems">
          <button style={{backgroundColor:"rgba(240,248,255,255)" ,   }}>
            <AiOutlineCalendar style={{ color: "rgba(20,121,255,255)",marginTop:"-5px"  }} />
          </button>
          <p>Calander</p>
        </div>
        <div id="hmainnavitems" className="mainnavitems" >

          <button style={{backgroundColor:"rgba(240,248,255,255)"  }}>
            {" "}
            <BsPerson style={{ color: "rgba(20,121,255,255)",marginTop:"-5px" }} />
          </button>
          <p>Profile</p>
        </div>
        <div id="hmainnavitems" className="mainnavitems">
          <button style={{backgroundColor:"rgba(240,248,255,255)"  }}>
            {" "}
            <RiSettingsLine style={{ color: "rgba(20,121,255,255)",marginTop:"-5px" }} />
          </button>
          <p>Setting</p>
        </div>
      </div>
    

      <BsFillCircleFill
            style={{
              color: "rgba(20,121,255,255)", 
               marginRight:"12px",
               marginTop:"30px",
               width:"10px"
            }}
          />
      <div className="imgnav"> 
    
                 <img  
            src={require("../images/dp.jpg")}
            style={{ 
              position:"absolute",
              width: "35px",
              height: "35px", 
              marginLeft:"-40px",
              borderRadius:"5px 12px 5px 5px",
              marginTop:"-8px"
            }}
          ></img>
       </div>
       <p style={{marginTop:"30px",
       marginRight:"40px", textWrap:"nowrap",fontSize:"8px",fontWeight:"bold"}}> Dr Anne Snowdon</p>
       <div style={{display:"inline-flex",marginTop:"30px",marginRight:"30px"}}>
 <AiOutlinePoweroff
            style={{ width: "12px", marginTop: "2px",marginRight:"5px" }}
          />
       <p style={{fontSize:"12px",fontWeight:"500",marginRight:"12px" }}>Log out</p>
       </div>
    </div>

    //   <div
    //     className="container"
    //     style={{
    //       display:"flex",
    //       flexDirection:"column",
    //    //   backgroundColor: "white",
    //       width: "150px",
    //        height: "90%",
    //       // marginTop:"30px",
    //    //    marginLeft:"200px",
    //   //    borderRadius: "40px 0px 0px 40px",
    //       border: "none ",
    //       borderRight: "none",
    //       boxShadow: " rgb(38, 57, 77) 0px 20px 30px -20px",
    //       //borderColor:"blue"
    //    //   paddingTop:"10px",

    //     }}
    //   >
    //     <div

    //     >
    //       <h6
    //         style={{
    //           display: "flex",
    //           paddingTop: "30px",
    //           color: "blue",
    //           fontWeight: "bold",
    //           fontSize: "12px",
    //           justifyContent: "center",
    //           textAlign: "center",
    //           alignItems: "center",
    //           width: "100px",
    //         }}
    //       >
    //         DocApp
    //       </h6>
    //     </div>
    //     <div
    //       className="row"
    //       style={{
    //         paddingTop: "25px",
    //         margin: "0px 0px 0px 0px",
    //         width: "40px",
    //         justifyContent: "center",
    //         textAlign: "center",
    //         alignItems: "end",
    //         marginLeft: "30px",
    //         borderRadius: "0px 40px 40px 0px",
    //         boxShadow: " rgb(38, 57, 77) 0px 20px 30px -20px",
    //       }}
    //     >
    //       <button
    //         type="button"
    //         style={{
    //           background: "blue",
    //           borderRadius: "10px",
    //           width: "30px",
    //           height: "30px",
    //           border: "none",
    //           margin: "0px 0px 0px 0px",
    //           paddingTop: "0px",
    //           justifyContent: "center",
    //           textAlign: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         <CgDetailsMore
    //           style={{
    //             color: "white",
    //             width: "15px",
    //             height: "20px",
    //             marginLeft: "-5px",
    //             borderRadius: "0px 40px 40px 0px",
    //             boxShadow: " rgb(38, 57, 77) 0px 20px 30px -20px",
    //           }}
    //         />
    //       </button>
    //       <p
    //         style={{
    //           width: "60px",
    //           height: "30px",
    //           color: "blue",
    //           fontWeight: "bold ",
    //           fontSize: "10px",
    //           fontFamily: "Poppins",
    //           justifyContent: "center",
    //           textAlign: "center",
    //           alignItems: "center",
    //           paddingTop: "4px",
    //           paddingRight: "65px",
    //         }}
    //       >
    //         Dashboard
    //       </p>
    //     </div>
    //     <div
    //       className="row"
    //       style={{
    //         margin: "-55px 0px 0px -60px",
    //         width: "38px",
    //         height: "30px",
    //         paddingTop: "0px",
    //       }}
    //     >
    //       <button
    //         type="button"
    //         style={{
    //           border: "None",
    //           margin: "40px 0px 0px 95px",
    //           width: "80%",
    //           height: "30px",
    //           background: "rgba(240,248,255,255)",
    //           borderRadius: "8px",
    //         }}
    //       >
    //         <AiOutlineCalendar
    //           style={{
    //             color: "rgba(20,121,255,255)",
    //             marginLeft: "-5px",
    //             marginTop: "-5px",
    //           }}
    //         />
    //       </button>
    //       <p
    //         style={{
    //           paddingTop: "5px",
    //           margin: "0px 0px 0px 75px",
    //           fontSize: "10px",
    //           color: "black",
    //           fontWeight: "bold",
    //           fontFamily: "Poppins",
    //           borderRadius: "0px 40px 40px 0px",
    //           boxShadow: " rgb(38, 57, 77) 0px 20px 30px -20px",
    //           justifyContent: "center",
    //           textAlign: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         Calandar
    //       </p>
    //     </div>
    //     <div
    //       className="row"
    //       style={{
    //         paddingTop: "2px",
    //         margin: "-0px 0px 0px -60px",
    //         width: "35px",
    //         height: "32px",
    //       }}
    //     >
    //       <button
    //         type="button"
    //         style={{
    //           border: "None",
    //           margin: "70px 0px 0px 95px",
    //           width: "90%",
    //           height: "30px",
    //           background: ,
    //           borderRadius: "10px",
    //         }}
    //       >
    //         <BsPerson
    //           style={{
    //             color: "rgba(63,145,255,255)",
    //             margin: "-5px 0px 0px -4px",
    //           }}
    //         />
    //       </button>
    //       <p
    //         style={{
    //           paddingTop: "15%",
    //           margin: "0px 0px 0px 85px",
    //           fontSize: "10px",
    //           color: "black",
    //           fontFamily: "Poppins",
    //           fontWeight: "bold",
    //           width: "20px",
    //           justifyContent: "center",
    //           textAlign: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         Profile
    //       </p>
    //     </div>
    //     <div
    //       className="row"
    //       style={{
    //         paddingTop: "0px",
    //         margin: "10px 0px 0px -53px",
    //         width: "35px",
    //         height: "30px",
    //       }}
    //     >
    //       <button
    //         type="button"
    //         style={{
    //           border: "None",
    //           margin: "90px 0px 0px 90px",
    //           width: "80%",
    //           height: "30px",
    //           background: "rgba(240,248,255,255)",
    //           borderRadius: "10px",
    //         }}
    //       >
    //         <RiSettingsLine
    //           style={{
    //             color: "rgba(63,145,255,255)",
    //             margin: "-5px 0px 0px -6px",
    //           }}
    //         />
    //       </button>
    //       <small
    //         style={{
    //           paddingTop: "10%",
    //           margin: "0px 0px 0px 73px",
    //           fontSize: "10px",
    //           color: "black",
    //           fontFamily: "Poppins",
    //           fontWeight: "bold",
    //         }}
    //       >
    //         Settings
    //       </small>
    //     </div>

    //     <div
    //       style={{width: "15px", height: "20px",

    //        }}
    //     >
          // <img
          //   src={require("../images/dp.jpg")}
          //   style={{
          //     margin: "140px 0px 0px 30px",
          //     width: "35px",
          //     height: "35px",
          //     borderRadius: "10px 10px 10px 10px",
          //   }}
          // ></img>

          // <BsFillCircleFill
          //   style={{
          //     color: "rgba(63,145,255,255)",
          //     margin: "-100px 0px 0px 60px",
          //     paddingTop:"0px",
          //     width: "8px",
          //   }}
          // />
    //       <p
    //         style={{
    //           paddingTop: "0%",
    //          margin: "0px 0px 0px 20px",
    //           textWrap: "nowrap",
    //           fontSize: "8px",
    //           color: "black",
    //           fontFamily: "Poppins",
    //           fontWeight: "bold",
    //         }}
    //       >
    //         Dr Anne Snowdon
    //       </p>
    //     </div>

    //     <div style={{ width: "12px", marginTop: "215px", marginLeft: "15px" }}>
          // <AiOutlinePoweroff
          //   style={{ width: "12px", marginTop: "10px", marginLeft: "10px" }}
          // />

    //       <p
    //         style={{
    //           textWrap: "nowrap",
    //           color: "black",
    //           fontSize: "8px",
    //           color: "black",
    //           fontFamily: "Poppins",
    //           fontWeight: "bold",
    //           width: "12px",
    //           marginLeft: "33px",
    //           marginTop: "-15px",
    //         }}
    //       >
    //         Log out
    //       </p>
    //    </div>
    //  </div>
  );
};

export default DocappComponent;
