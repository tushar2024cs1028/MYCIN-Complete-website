import React from 'react';
import "./Achieve_Card.css";
const AchieveCard = ({ imageSource, title, text, date,position }) => {
    return(
        <div className='Achieve_image'>
            <img className="Achieve_image_img" src={imageSource} alt="consoles">
            </img>
            <div className='Achieve_image_overlay'>
               <div className='Achieve_image_title'>{title}</div>
               <p className='Achieve_image_description'>{date}</p>
               <p className='Achieve_image_description'>Postion:{position}</p>
               <p className='Achieve_image_description'>{text}</p>
            </div>

        </div>
    );
}
export default AchieveCard;