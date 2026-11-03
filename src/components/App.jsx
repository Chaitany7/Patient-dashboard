import React, { useState, useEffect } from "react";
import Header from "./Header"
import Patient_list from "./Patients-list"
import Diagnosis_history from "./Diagnosis-history"
import Patient_profile from "./Patient-profile"
import Diagnostic_list from "./Diagnostic-list"
import Lab_result from "./Lab-result"
import Data from "./test.json"


function App() {
    const [patient, setPatient] = useState(Data);
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         try {
    //             const username = "---some username----";
    //             const password = "---some password----";

    //             const credentials = btoa(`${username}:${password}`);

    //             const response = await fetch("---API link---", {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization: `Basic ${credentials}`,
    //                     Accept: "application/json"
    //                 }
    //             });

    //             if (!response.ok) {
    //                 throw new Error(`HTTP error: ${response.status}`);
    //             }

    //             const data = await response.json();
    //             setPatient(data);

    //         } catch (error) {
    //             console.log("Error fetching users:", error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     getUsers();
    // }, []);

    if (loading) {
        return <h2>Loading patient data...</h2>;
    }

    return <div>
        <Header />
        <Patient_list />
        <Diagnosis_history />
        <Patient_profile user={patient} />
        <Diagnostic_list user={patient} />
        <Lab_result user={patient} />
    </div>
}

export default App;