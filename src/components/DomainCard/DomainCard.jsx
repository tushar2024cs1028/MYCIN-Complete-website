import React from "react";
import Card from "./Cards";
import "./DomainCard.css";
import image1 from "../../assests/WEB.png";
import image2 from "../../assests/ML.png";
import image3 from "../../assests/AR.png";
import image4 from "../../assests/Cyber.png";


function DomainCard() {
const cards = [
    {
      id: 1,
      title: "Web Development",
      image: image1,
      url: "#",
    },
    {
      id: 2,
      title: "ML/AI",
      image: image2,
      url: "#",
    },
    {
      id: 3,
      title: "AR/VR",
      image: image3,
      url: "#",
    },
    {
        id: 4,
        title: "Cyber Security",
        image: image4,
        url: "#",
      }
  ];
  
  
    return (
      <div className="container ">
        <h3 className="Title">Domains</h3>
        <div className="row">
          {cards.map(({ title, image, url, id }) => (
            <div className="col" key={id}>
              <Card imageSource={image} title={title} url={url} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export default DomainCard;