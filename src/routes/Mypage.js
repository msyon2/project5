import React from "react";
import popcorn from "../assets/popcorn_solid_gray1.png";

import "./Mypage.css";

function Mypage() {
  return (
    <div className="user">
      <div className="id">
        <img className="empty_box pr" src={popcorn} alt="popcorn" />
        <span className="user_name"> Kiwi_lover</span>
      </div>
      <div className="user_save">
        <h3> Your Movie Box is empty</h3>
        <p>Please go back to main page to choose your movies. </p>
      </div>
    </div>
  );
}

export default Mypage;
