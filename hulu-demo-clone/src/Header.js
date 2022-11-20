import React from "react";
import home from "./home.png";
import trending from "./trending.png"
import Tv from "./tv.png"
import search from "./search.png"
import collec from "./collections.png"
import account from "./account.png"
import "./Header.css"




function Header () {
  return (
    <div className="header">
        <div className="header__icons">
            <div className="header__icon">
                <img src={home} alt="" width="45" height="45"/>
                <p>Home</p>
            </div>
            <div className="header__icon">
                <img src={trending} alt=""  width="45" height="45"/>
                <p>Trending</p>
            </div>
            <div className="header__icon">
                <img src={Tv} alt=""  width="45" height="45"/>
                <p>Verified</p>
            </div>
            <div className="header__icon">
                <img src={collec} alt="" width="45" height="45"/>
                <p>Collections</p>
            </div>
            <div className="header__icon">
                <img src={search} alt="" width="45" height="45"/>
                <p>Search</p>
            </div>
            <div className="header__icon">
                <img src={account} alt="" width="45" height="45"/>
                <p>Account</p>
            </div>
     
        </div>
        <img src="https://deadline.com/wp-content/uploads/2021/02/Hulu-featured-1.jpg?w=681&h=383&crop=1" alt="" width="450" height="225"/>
    </div>
  )
}

export default Header