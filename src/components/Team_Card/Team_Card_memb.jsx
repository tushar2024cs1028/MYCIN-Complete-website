import React from "react";
import TeamCard from "./Team_Card";
import "./Team_Card_memb.css";
import image1 from "../../assests/WEB.png";
import image2 from "../../assests/WEB.png";
import image3 from "../../assests/WEB.png";
import image4 from "../../assests/WEB.png";
const Team_Member=()=>{
    const cards = [
        {
          id: 1,
          title: "Archit",
          image: image1,
          text:"Preseident",
          url1:"#!",
          url2:"#!",
          url3:"#!"
          
        },
        {
          id: 2,
          title: "Archit",
          image: image2,
          text:"Preseident",
          url1:"#!",
          url2:"#!",
          url3:"#!"
          
        },
        {
          id: 3,
          title: "Archit",
          image: image3,
          text:"Preseident",
          url1:"#!",
          url2:"#!",
          url3:"#!"
          
        },
        {
            id: 4,
            title: "Archit",
            image: image4,
            text:"Preseident",
            url1:"#!",
            url2:"#!",
            url3:"#!"
            
          },
          {
            id: 5,
            title: "Archit",
            image: image4,
            text:"Preseident",
            url1:"#!",
            url2:"#!",
            url3:"#!"
            
          },
          {
            id: 6,
            title: "Archit",
            image: image4,
            text:"Preseident",
            url1:"#!",
            url2:"#!",
            url3:"#!"
            
          },
          {
            id: 7,
            title: "Archit",
            image: image4,
            text:"Preseident",
            url1:"#!",
            url2:"#!",
            url3:"#!"
            
          }
      ];
    return (
    <div className="Team_container ">
         <h3 className="Team_Title">Team Members</h3>
            <div className="Team_row">
               {cards.map(({ title, image, text,url1,url2,url3, id }) => (
                  <div className="Team_col" key={id}>
                    <TeamCard imageSource={image} title={title} text={text} url1={url1} url2={url2} url3={url3}/>
                  </div>
                  ))}
            </div>
  </div>);
}
export default Team_Member;