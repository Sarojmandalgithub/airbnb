import React, { useState } from "react";
import { links } from "../../assets/images-links";
import "./styles.css";

function Filter() {
  const [selectedFilter,setSelectedFilter]=useState();
  return (
    <div className="filter-div">
      {links.map((item, i) => (
        <div 
        key={i}
         className={`links-box ${i==selectedFilter && "selected-box"}`}
        onClick={()=>{
          console.log("selecting key",i);
        setSelectedFilter(i);
        }}>
          <img src={item.imgSrc} className="links-img" alt={item.label} />
          <p 
          className={`links-label ${i==selectedFilter && "selected-label"}`}>
            {item.label}</p>
        </div>
      ))}
      Filter
    </div>
  );
};

export default Filter;