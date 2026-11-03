import React from "react";
import Table from './Diagnostic-list-content';

function Diagnostic_list(props) {
    return <div className="diagnostic-list">
        <h2>Diagnostic List</h2>
        <div className="table-container">
            <div className="table-head">
                <h1>Diagnosis</h1>
                <h2>Description</h2>
                <h3>Status</h3>
            </div>
            <div className="table-body">
                <table>
                    <tbody>
                        {(props.user[3].diagnostic_list).map((item, index) => (
                            <Table
                                key={index}
                                name={item.name}
                                description={item.description}
                                status={item.status}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div >
}

export default Diagnostic_list;