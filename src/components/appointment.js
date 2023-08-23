import React from "react";
import { BsPerson } from "react-icons/bs";
import { RxReader } from "react-icons/rx";
import "./appointment.css";

const Appointment = () => {
  return (
    <>
      <div className="appointmentbox">
        <div className="calander">
          <p>May,2020</p>
          <div className="calanderprt">
            <div
              className="calanderprtiterms"
              style={{ visibility: "hidden" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ visibility: "hidden" }}
            ></div>
            <div className="calanderprtiterms"></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>

            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>

            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ backgroundColor: "rgba(20,121,255,255)" }}
            >
              <p
                style={{
                  fontSize: "8px",
                  marginTop: "-1px",
                  marginLeft: "4px",
                  color: "white",
                }}
              >
                7
              </p>
            </div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>

            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div className="calanderprtiterms"></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            ></div>

            <div
              className="calanderprtiterms"
              style={{ visibility: "hidden" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ visibility: "hidden" }}
            ></div>
            <div
              className="calanderprtiterms"
              style={{ visibility: "hidden" }}
            ></div>
          </div>
        </div>
        <div className="reportmessagetag">
          <div className="headtitle">
            <p style={{ color: "black" }}>Hello, Anne!</p>
          </div>
          <div className="subheading">
            <p
              style={{
                marginTop: "35px",
                marginLeft: "20px",
                position: "absolute",
                fontSize: "12px",
                fontWeight: "600", 
              }}
            >
              Don't forget to complete <br></br>
              your daily health report.
            </p>
            <p
              style={{
                marginTop: "80px",
                marginLeft: "22px",
                position: "absolute",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              Have a nice day!
            </p>
            <button
              style={{
                position: "absolute",
                marginTop: "105px",
                marginLeft: "-105px",
                border: "none",
                borderRadius: "10px",
                color: "white",
                backgroundColor: "rgba(20,121,255,255)",
                borderColor: "rgba(20,121,255,255)",
                boxShadow: "0px 10px 50px 10px #9999",
                width: "150px",
                height:"30px"
              }}
            ><p style={{marginTop:"0px"}}>  Complete report</p>
            
            </button>
          </div>
        </div>
        <div class className="todayappointmenttag">
          <div className="todayappointmenttagtitle">
            <p style={{ color: "black" }}>Today's appointments</p>
          </div>
          <div className="followup_new">
            <div
              className="followup_newIterms"
              style={{ borderColor: "rgba(20,121,255,255)" }}
            >
              <div className="iconsapt">
                <BsPerson className="iconapt" />
              </div>
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  fontFamily: "inherit",
                }}
              >
                Jessica<br></br> Ashcroft{" "}
              </p>
              <p
                style={{
                  marginTop: "-17px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                  color: "black",
                }}
              >
                Follow-up
              </p>

              <p
                style={{
                  paddingTop: "5px",
                  color: "blue",
                  marginTop: " 0px",
                  fontSize: "8px",
                }}
              >
                Next, 08:00
              </p>
            </div>
            <div className="followup_newIterms">
              <div className="iconsapt">
                <BsPerson className="iconapt" />
              </div>
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  fontFamily: "inherit",
                }}
              >
                Lily<br></br> Anderson{" "}
              </p>
              <p
                style={{
                  marginTop: "-17px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                  color: "black",
                }}
              >
                New patient
              </p>

              <p
                style={{
                  paddingTop: "5px",
                  marginTop: " 0px",
                  fontSize: "8px",
                  letterSpacing: "1px",
                }}
              >
                08:30
              </p>
            </div>
            <div className="followup_newIterms">
              <div className="iconsapt">
                <BsPerson className="iconapt" />
              </div>
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  fontFamily: "inherit",
                }}
              >
                Amanda<br></br> Lipp{" "}
              </p>
              <p
                style={{
                  marginTop: "-17px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                  color: "black",
                }}
              >
                New patient
              </p>

              <p
                style={{
                  paddingTop: "5px",
                  marginTop: " 0px",
                  fontSize: "8px",
                  letterSpacing: "1px",
                }}
              >
                09:00
              </p>
            </div>
            <div className="followup_newIterms">
              <div className="iconsapt">
                <BsPerson className="iconapt" />
              </div>
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  fontFamily: "inherit",
                }}
              >
                Adrienne<br></br> Olly{" "}
              </p>
              <p
                style={{
                  marginTop: "-17px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                  color: "black",
                }}
              >
                followup-new
              </p>

              <p
                style={{
                  marginTop: " 0px",
                  paddingTop: "5px",
                  fontSize: "8px",
                  letterSpacing: "1px",
                }}
              >
                09:30
              </p>
            </div>
            <div className="followup_newIterms">
              <div className="iconsapt">
                <BsPerson className="iconapt" />
              </div>
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "0px",
                  fontFamily: "inherit",
                }}
              >
                Alicia<br></br> James{" "}
              </p>
              <p
                style={{
                  marginTop: "-17px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                  color: "black",
                }}
              >
                New patient
              </p>

              <p
                style={{
                  paddingTop: "5px",
                  marginTop: " 0px",
                  fontSize: "8px",
                  letterSpacing: "1px",
                }}
              >
                11:30
              </p>
            </div>
          </div>
          <div className="monthlyrpt">
            <div className="monthlyrpttitle">
              <p style={{ color: "black" }}>Monthly reports</p>
            </div>
            <div className="reportDetail">
              <div>
                <div
                  className="iconsapt"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "5px",
                    marginTop: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <RxReader
                    style={{
                      height: "25px",
                      marginTop: "-5px",

                      color: "rgba(20,121,255,255)",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginLeft: "35px",
                    fontSize: "8px",
                    fontWeight: "bold",
                    marginTop: "-25px",
                    fontFamily: "inherit",
                  }}
                >
                  Treatment report
                </p>
                <div
                  style={{
                    borderStyle: "ridge",
                    width: "80px",
                    height: "5px",
                    marginTop: "-12px",
                    marginLeft: "40px",
                    backgroundColor: "rgba(20,121,255,255)",
                    borderColor: "rgba(20,121,255,255)",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "100px",
                      fontWeight: "bold",
                      color: "rgba(20,121,255,255)",
                      fontSize: "10px",
                    }}
                  >
                    85%
                  </p>
                </div>
              </div>
            </div>
            <div className="reportDetail">
              <div>
                <div
                  className="iconsapt"
                  style={{
                    width: "25px",
                    height: "25px",
                    marginLeft: "5px",
                    marginTop: "5px",
                    borderRadius: "5px",
                  }}
                >
                  <RxReader
                    style={{
                      height: "25px",
                      marginTop: "-5px",

                      color: "rgba(20,121,255,255)",
                    }}
                  />
                </div>
                <p
                  style={{
                    marginLeft: "35px",
                    fontSize: "8px",
                    fontWeight: "bold",
                    marginTop: "-25px",
                    fontFamily: "inherit",
                  }}
                >
                  State of being
                </p>
                <div
                  style={{
                    borderStyle: "ridge",
                    width: "80px",
                    height: "5px",
                    marginTop: "-12px",
                    marginLeft: "40px",
                    backgroundColor: "rgba(20,121,255,255)",
                    borderColor: "rgba(20,121,255,255)",
                    borderRadius: "10px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "-10px",
                      marginLeft: "100px",
                      fontWeight: "bold",
                      color: "rgba(20,121,255,255)",
                      fontSize: "10px",
                    }}
                  >
                    75%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="pointmenttag"></div> */}
      </div>
    </>
  );
};

export default Appointment;

{
  /* <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        marginLeft: "570px",
        marginTop: "29px", 
      }}
    >
      <div
        className="box"
       style={{
          borderStyle: "ridge",
          border: "none",
          position:"absolute",
          width: "45%",
          height: "180px",
          marginTop:"40px",
          borderRadius: "12px 12px 12px 12px",
//backgroundColor:"red",
           backgroundColor: "rgba(255,255,255,255)", 
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      ></div>

      <div
        style={{
          borderStyle: "ridge",
          border: "none",
       position:"absolute",
       margin:"40px 0px 0px 180px",
          width: "72.6%",
          height: "180px",
          borderRadius: "12px 12px 12px 12px",

          backgroundColor: "rgba(255,255,255,255)", 
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "rgba(35,62,106,255)",
            fontFamily: "inherit",
            paddingTop: "20px",
            paddingRight:"150px"
          }}
        >
          Hello,Anne!
        </p>
        <p
          style={{
            fontSize: "12px",
            marginTop: "-14px",
            color: "rgba(16,50,98,255)",
            fontFamily: "inherit",
            textWrap: "nowrap",
            paddingLeft: "12px",
          }}
        >
          Don't forget to complete <br></br> your daily health report.
        </p>
        <p
          style={{
            fontWeight: "bold",
            textWrap: "nowrap",
            fontSize: "12px",
            marginTop: "-15px",
            color: "rgba(16,50,98,255)",
            fontFamily: "Poppins",
            paddingTop: "10px",
            textWrap: "nowrap",
          }}
        >
          Have a nice day!
        </p>
        <p
          style={{
            marginTop: "0px",
            borderStyle: "ridge",
            width: "100px",
            height: "25px",
            marginLeft: "14px",
            backgroundColor: "rgba(63,145,255,255)",
            borderRadius: "10px",
            color: "white",
            padding: "0px 0px 0px 0px",
            fontFamily: "Poppins",
            fontSize: "8px",
            fontWeight: "bold",
            //  boxShadow: " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}
        >
          Complete report
        </p>
      </div>
      <div
        style={{
                 position:"absolute",
          // border :"groove",
          background: "rgba(255,255,255,255)",
          // borderColor:"red",
          width: "120%",
          height: "275px",
          marginTop: "235px",
          marginLeft: "0px",
          borderRadius: "12px 12px 0px 0px",
          // border: "none",
          boxShadow:
            " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
      >
        <p
          style={{
            marginLeft: " 0px",
            fontWeight: "bold",
            fontFamily: "inherit",
            fontSize: "10px",
            color: "black",
            width: "225px",
            height: "26px",
            margin: "40px 0px 0px px",
            paddingRight:"10px"
          }}
        >
          Today's appointments
        </p>

        <div
          div
          className="d-flex align-items-start  mb-3"
          // style={{ height: "90px", width: "20%", background: "red" }}
        >
          <div
            style={{
              background: "white",
            }}
          >
            <div
              style={{
                //   borderStyle: "ridge",
                width: "55px",
                height: "85px",
                //  borderRadius: "5px",
                marginLeft: "30px",
                //   borderColor: "rgba(20,121,255,255)",
                marginTop: "-5px",
              }}
            >
              <BsPerson
                style={{
                  color: "rgba(20,121,255,255)",
                  color: "rgba(20,121,255,255)",
                  marginTop: "6px",
                  background: "rgba(230,241,255,255)",
                  borderRadius: "5px",
                  height: "25px",
                }}
              />
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  fontFamily: "inherit",
                }}
              >
                Jessica<br></br> Ashcroft{" "}
              </p>
              <p
                style={{
                  marginTop: "-15px",
                  fontSize: "7px",
                  fontFamily: "Poppins",
                }}
              >
                Follow-up
              </p>
            </div>
            <p
              style={{
                marginLeft: "30px",
                color: "rgba(20,121,255,255)",
                fontSize: "8px",
                fontWeight: "bold",
                marginTop: "5px",
                fontFamily: "inherit",
              }}
            >
              Next, 08:00
            </p>
          </div>
          <div
            style={{
              background: "white",
            }}
          >
            <div
              style={{
                borderStyle: "ridge",
                width: "55px",
                height: "85px",
                borderRadius: "5px",
                marginLeft: "10px",
                borderColor: "rgba(20,121,255,255)",
                marginTop: "-6px",
                border: "none",
              }}
            >
              <BsPerson
                style={{
                  color: "rgba(20,121,255,255)",
                  marginTop: "6px",
                  background: "rgba(230,241,255,255)",
                  borderRadius: "5px",
                  height: "25px",
                }}
              />
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "inherit",
                }}
              >
                Lily<br></br> Anderson{" "}
              </p>
              <p
                style={{
                  marginTop: "-14px",
                  fontSize: "8px",
                  fontFamily: "Poppins",
                }}
              >
                New patient
              </p>
            </div>
            <p
              style={{
                fontSize: "8px",
                marginTop: "6px",
              }}
            >
              08:30
            </p>
          </div>
          <div
            style={{
              background: "white",
            }}
          >
            <div
              style={{
                borderStyle: "ridge",

                width: "55px",
                height: "85px",
                borderRadius: "10px",
                marginLeft: "10px",
                borderColor: "rgba(20,121,255,255)",
                marginTop: "-5px",
                border: "none",
              }}
            >
              <BsPerson
                style={{
                  color: "rgba(20,121,255,255)",
                  marginTop: "6px",
                  background: "rgba(230,241,255,255)",
                  borderRadius: "12px",
                  height: "25px",
                }}
              />
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "inherit",
                }}
              >
                Amanda<br></br> Lipp{" "}
              </p>
              <p
                style={{
                  marginTop: "-14px",
                  fontSize: "8px",
                  fontFamily: "Poppins",
                }}
              >
                New patient
              </p>
            </div>
            <p
              style={{
                marginLeft: "0px",
                fontSize: "8px",
                marginTop: "4px",
              }}
            >
              09:00
            </p>
          </div>
          <div
            style={{
              background: "white",
            }}
          >
            <div
              style={{
                borderStyle: "ridge",
                border: "none",
                width: "55px",
                height: "85px",
                borderRadius: "10px",
                marginLeft: "10px",
                borderColor: "rgba(20,121,255,255)",
                marginTop: "-5px",
              }}
            >
              <BsPerson
                style={{
                  color: "rgba(20,121,255,255)",
                  marginTop: "6px",
                  background: "rgba(230,241,255,255)",
                  borderRadius: "12px",
                  height: "25px",
                }}
              />
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "inherit",
                }}
              >
                Adrienne<br></br> Olly{" "}
              </p>
              <p
                style={{
                  marginTop: "-14px",
                  fontSize: "8px",
                  fontFamily: "Poppins",
                }}
              >
                Follow-up
              </p>
            </div>
            <p
              style={{
                fontSize: "8px",
                marginTop: "4px",
              }}
            >
              09:30
            </p>
          </div>
          <div
            style={{
              background: "white",
            }}
          >
            <div
              style={{
                borderStyle: "ridge",
                border: "none",
                width: "55px",
                height: "85px",
                borderRadius: "10px",
                marginLeft: "10px",
                borderColor: "rgba(20,121,255,255)",
                marginTop: "-5px",
              }}
            >
              <BsPerson
                style={{
                  color: "rgba(20,121,255,255)",
                  marginTop: "6px",
                  background: "rgba(230,241,255,255)",
                  borderRadius: "12px",
                  height: "25px",
                }}
              />
              <p
                style={{
                  fontSize: "8px",
                  fontWeight: "bold",
                  marginTop: "12px",
                  fontFamily: "inherit",
                }}
              >
                Alicia<br></br> James{" "}
              </p>
              <p
                style={{
                  marginTop: "-14px",
                  fontSize: "8px",
                  fontFamily: "Poppins",
                }}
              >
                Follow-up
              </p>
            </div>
            <p
              style={{
                fontSize: "8px",
                marginTop: "4px",
              }}
            >
              11:30
            </p>
          </div>
        </div>
      </div>
      <div
        style={{ borderStyle: "ridge", marginTop: "-230px", border: "none" }}
      >
        <p
          style={{
            fontWeight: "bold",
            padding: "120px 0px 0px 0px",
            fontFamily: "inherit",
            fontSize: "10px",
          }}
        >
          Monthly reports
        </p>
      </div>

      <div
        style={{
          borderStyle: "ridge",
          marginLeft: "40px",
          width: "160px",
          height: "30px",
          border: "none",
          marginTop: "-2px",
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        }}
      >
        <RxReader
          style={{
            marginLeft: "-130px",
            height: "25px",
            marginTop: "2px",
            color: "rgba(20,121,255,255)",
          }}
        />
        <p
          style={{
            marginLeft: "-35px",
            fontSize: "8px",
            fontWeight: "bold",
            marginTop: "-25px",
            fontFamily: "inherit",
          }}
        >
          Treatment report
        </p>
        <div
          style={{
            borderStyle: "ridge",
            width: "80px",
            height: "5px",
            marginTop: "-12px",
            marginLeft: "30px",
            backgroundColor: "rgba(20,121,255,255)",
            borderColor: "rgba(20,121,255,255)",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              marginTop: "-6px",
              marginLeft: "90px",
              color: "rgba(20,121,255,255)",
              fontSize: "8px",
            }}
          >
            85%
          </p>
        </div>
      </div>

      <div
        style={{
          borderStyle: "ridge",
          marginLeft: "40px",
          width: "160px",
          height: "30px",
          border: "none",
          margin: "-30px 0px 0px 220px",
          boxShadow:
            " rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px",
        }}
      >
        <RxReader
          style={{
            marginLeft: "-130px",
            height: "25px",
            marginTop: "2px",
            color: "rgba(20,121,255,255)",
          }}
        />
        <p
          style={{
            marginLeft: "-35px",
            fontSize: "8px",
            fontWeight: "bold",
            marginTop: "-25px",
            fontFamily: "inherit",
          }}
        >
          Treatment report
        </p>
        <div
          style={{
            borderStyle: "ridge",
            width: "80px",
            height: "5px",
            marginTop: "-12px",
            marginLeft: "30px",
            backgroundColor: "rgba(20,121,255,255)",
            borderColor: "rgba(20,121,255,255)",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              marginTop: "-6px",
              marginLeft: "90px",
              color: "rgba(20,121,255,255)",
              fontSize: "8px",
            }}
          >
            85%
          </p>
        </div>
      </div>
    </div> */
}
