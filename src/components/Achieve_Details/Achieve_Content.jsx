import "./Achieve_Content.css";
import AchieveCard from "./Achieve_Card";
import image4 from "../../assests/WEB.png";

function AchieveContent() {
    const cards = [
        {
          id: 1,
          title: "Archit",
          image: image4,
          text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
          
          
        },
        {
          id: 2,
          title: "Archit",
          image: image4,
          text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
         
          
        },
        {
          id: 3,
          title: "Archit",
          image: image4,
          text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
         
          
        },
        {
            id: 4,
            title: "Archit",
            image: image4,
            text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
            
            
          },
          {
            id: 5,
            title: "Archit",
            image: image4,
            text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
           
            
          },
          {
            id: 6,
            title: "Archit",
            image: image4,
            text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
            
          },
          {
            id: 7,
            title: "Archit",
            image: image4,
            text:"Smarth india hackathon",
          date:"2022-10-09",
          position:"3"
            
          }
      ];
  return ( <div className="Achievement_container ">
  <h3 className="Achievement_Title">Achievements</h3>
     <div className="Achievement_row">
        {cards.map(({ title, image, text,date,position, id }) => (
           <div className="Achievement_col" key={id}>
             <AchieveCard imageSource={image} title={title} text={text} date={date} position={position}/>
           </div>
           ))}
     </div>
</div>
  );
}

export default AchieveContent;