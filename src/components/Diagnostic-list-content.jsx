import React from "react";

function Diagnostic_list_content(props) {
    return <tr>
        <td>{props.name}</td>
        <td>{props.description}</td>
        <td>{props.status}</td>
    </tr>

}

export default Diagnostic_list_content;