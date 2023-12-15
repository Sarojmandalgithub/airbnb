import React from 'react';
import "./styles.css";
import hotel from "../../assets/hotel/hotel-2.jpg";
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
const Card = () => {
  return (
    <div>
     <img src={hotel} className="card-img"/>
     <div className="card-info-box">
        <h3 className="card-title">Place</h3>
        <div className="card-rating">
       <StarRateRoundedIcon/>
       <p>4.8</p>
        </div>
        </div>

  <div className="card1">
      <p style={{margin:0 , color:"var(--font-grey)" }}>Beach and sea view</p>
        <p style={{margin:0,color:"var(--font-grey)" }}>12-23 December</p>
        <p style={{margin:0,color:"var(--font-grey)" }}><strong>₹2000</strong>
         night</p>
         </div>
     </div>
     
  )
}

export default Card;