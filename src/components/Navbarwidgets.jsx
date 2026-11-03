import React from "react";


function Navbarwidgets(props) {


    return <div className="widgets" onClick={props.onClick}
        style={{
            backgroundColor: props.selected
                ? "#01F0D0"
                : "transparent"
        }} >
        <img className="widget-icon" src={props.link} alt="icon"></img>
        <p>{props.name}</p>
    </div>

}

export default Navbarwidgets;

// style={{ display: "flex", position: "relative", bottom: "17px", right: "8px" }}