import React from "react";
import Lab_files from "./Lab-files"

function Lab_result(props) {
    return <div className="lab-result">
        <h2>Lab Results</h2>
        <div className="lab-files-container">
            {props.user[3].lab_results.map((item, index) =>
                <Lab_files key={index} fileName={item} />
            )}
        </div>
    </div>
}

export default Lab_result;