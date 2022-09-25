import React from "react";
import "./Eventdetails.css";
import image1 from "../../assests/regisimg.png";
import EventCard from "./EventCard";


const Eventdetails=(probs)=>{
    const cards = [
        {
          id: 1,
          title: "SIH Hackathon",
          image: image1,
          text:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose"
        },
        {
          id: 2,
          title: "RACE 2022",
          image: image1,
          text:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose"
          
        },
        {
          id: 3,
          title: "Bootcamp Of Reactjs",
          image: image1,
          text:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose"
          
        },
        {
            id: 4,
            title: "Virtual Hackathon",
            image: image1,
            text:"A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose"
            
          }
      ];
     function SendEventExplorerToEvent(sendeventexplorertoeven){
      probs.SendEventExploreDataToApp(sendeventexplorertoeven);
     }
    return (
        <div className="Event_container ">
        <h3 className="Event_Title">Events</h3>
        <div className="Event_row">
          {cards.map(({ title, image, text,id }) => (
            <div className="Event_col" key={id}>
             
              <EventCard imageSource={image} title={title} text={text} SendEventExplorerToEvent= {SendEventExplorerToEvent}/>
            </div>
          ))}
        </div>
      </div>
    );
}
export default Eventdetails;