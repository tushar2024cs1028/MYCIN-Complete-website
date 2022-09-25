import React from "react";
import "./Anouncement.css";
import Regimg from "../../assests/regisimg.png";

const Anouncement=()=>{
     return (<div className="anounce">
                <h3 className="tittleAnounce">Anouncement</h3>
                <div className="anouncecontent">
                    <h4 className="Event_name">Event name</h4>
                    <p className="eventdetails">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti provident id odit ut accusamus, tenetur, non numquam amet minima dolorem aperiam, itaque possimus veritatis! Omnis minima incidunt nam voluptates nostrum!
                    </p>
                    <a href="#!"><button className="registerbtn">Registe now </button></a>

                </div>
                <div className="Imgsection">
                    <img src={Regimg} alt="" />
                </div>
     </div>);
};
export default Anouncement;