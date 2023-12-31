import React from 'react'
import logo from "../../assets/logo/airbnb-logo-png.png";
import "./styles.css";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from "./ProfileMenu"
import SimpleBottomNavigation from "./BottomNav";
import MobileSearchBar from '../MobileSearchBar';
const Header = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='logo' className='navbar-logo'/>
     
     <div className="search-bar">
     <div className="search-bar-text">Anywhere</div>
        <div className="search-bar-text">Any Week</div>
        <div className="search-bar-text2">Add guests</div>
        <div className="search-icon-div">
      <SearchRoundedIcon className="search-icon"/>
     </div>
     </div>
    
     <div className="profile-container">
     <div className="airbnb-your-home">Airbnb your home</div>
        <div className="airbnb-your-home">
          <LanguageRoundedIcon/>
        </div>
        <div className="profile-div">
          <BasicMenu />
        </div>
        <MobileSearchBar/>
     </div> 


 
    <SimpleBottomNavigation /> 

      </div>
      
  )
}

export default Header