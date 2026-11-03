import React from "react";
import test from './test.json'


function Moreinfo(props) {

    return <div className="profile-info">
        <img src={"/Assets/Images/profileinfoicon" + String(props.index) + ".svg"} alt="doctor_profile"></img>
        <div>
            <p className="profile-info-para1">{props.context}</p>
            <p className="profile-info-para2">{props.content}</p>
        </div>
    </div>
}

export default Moreinfo;