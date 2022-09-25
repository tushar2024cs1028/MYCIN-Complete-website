import React from "react";
import "./firstsection.css";
import Firstim from "../../assests/example-8.svg";


const firstSection = () => {
  return (
    
      
        <div className="section1">
            <div className="home_content">
              <h2 className="home_title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="information1">
                Lorem ipsum dolor sit amet consectetur  adipisicing elit.
                Aut saepe voluptatum earum  deserunt id iste,
                quas officiis et repellat!
              
              </p>
              <button className="btninside">Join us </button>
            </div>
            
              <div className="section1image">
                <img src={Firstim} alt="" />
              </div>
        </div>
      
    
  );
};

export default firstSection;