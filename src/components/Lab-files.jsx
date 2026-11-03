import React from "react";

function Lab_files(props) {
    return <div className="lab-files">
        <p>{props.fileName}</p>
        <img src="/Assets/Images/download.svg" alt="downloadIcon"></img>
    </div>
}

export default Lab_files;