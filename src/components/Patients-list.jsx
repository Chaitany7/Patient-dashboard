import React, { useState, useEffect } from "react";
import Patient from "./PatientInList"
import Data from "./test"


function Patient_list() {

    const [patient, setPatient] = useState(Data);

    // useEffect(() => {

    //     const getUsers = async () => {
    //         try {
    //             const username = "---some username---";
    //             const password = "---some password---";

    //             const credentials = btoa(
    //                 `${username}:${password}`
    //             );

    //             const response = await fetch(
    //                 "---some API link---",
    //                 {
    //                     method: "GET",
    //                     headers: {
    //                         "Authorization": `Basic ${credentials}`,
    //                         "Accept": "application/json"
    //                     }
    //                 }
    //             );

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error: ${response.status}`);
    //             }

    //             const data = await response.json();

    //             setPatient(data);

    //         } catch (error) {
    //             console.log("Error fetching users:", error);
    //         }
    //     };

    //     getUsers();

    // }, []);


    return <div className="patient-list-block">
        <h3 id="patient-list-heading">Patients</h3>
        <img id="patient-list-searchicon" src="/Assets/Images/search.svg" alt="searchIcon"></img>
        <div className="patient-list">
            {patient.map((user, index) =>
                <Patient
                    key={index}
                    profile_photo={user.profile_picture}
                    name={user.name}
                    gender={user.gender}
                    age={user.age}
                />
            )}
        </div>

    </div>
}

export default Patient_list;