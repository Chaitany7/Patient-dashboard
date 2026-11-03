import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import Data from './test'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);



function Diagnosis_history() {
    const [selectedMonths, setSelectedMonths] = useState(6);
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

    const history = patient[3]?.diagnosis_history || [];

    // API data is newest-first, so reverse it for chronological display.
    const chartHistory = ([...history].reverse()).slice(-selectedMonths);
    const systolicValues = chartHistory.map(
        item => item.blood_pressure.systolic.value
    );

    const diastolicValues = chartHistory.map(
        item => item.blood_pressure.diastolic.value
    );

    const lastSystolic = systolicValues[systolicValues.length - 1];
    const lastDiastolic = diastolicValues[diastolicValues.length - 1];

    const avgSystolic = systolicValues.length
        ? systolicValues.reduce((sum, value) => sum + value, 0) / systolicValues.length
        : 0;

    const avgDiastolic = diastolicValues.length
        ? diastolicValues.reduce((sum, value) => sum + value, 0) / diastolicValues.length
        : 0;
    const data = {
        labels: chartHistory.map(
            item => `${item.month.slice(0, 3)}, ${item.year}`
        ),

        datasets: [
            {
                label: 'Systolic',
                data: chartHistory.map(
                    item => item.blood_pressure.systolic.value
                ),
                borderColor: '#E66FD2',
                backgroundColor: '#E66FD2',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7

            },
            {
                label: 'Diastolic',
                data: chartHistory.map(
                    item => item.blood_pressure.diastolic.value
                ),
                borderColor: '#8C6FE6',
                backgroundColor: '#8C6FE6',
                tension: 0.4,
                pointRadius: 5,
                pointHoverRadius: 7

            }
        ]
    };

    const config = {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                display: 'false',
                position: 'none'
            },

        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            }
        }
    };

    return <div className="diagnosis-history">
        <h2 id="heading-Diagnosis-History">Diagnosis History</h2>
        <div className="statistics">
            <div className="chart-container">
                <h3 id="graph-title">Blood Pressure</h3>
                <select className="month-selector"
                    value={selectedMonths}
                    onChange={(e) => setSelectedMonths(Number(e.target.value))}>
                    <option value={6}>Last 6 months</option>
                    <option value={10}>Last 10 months</option>
                </select>
                <div className="graph">
                    <Line data={data} options={config} />
                </div>

            </div>

            <div className="chart-summary">
                <div className="summary-item">
                    <div className="summary-heading">
                        <span className="marker systolic-marker"></span>
                        <span >Systolic</span>
                    </div>

                    <h2>{lastSystolic ?? "--"}</h2>

                    <p>{lastSystolic == null
                        ? "No data available"
                        : lastSystolic < avgSystolic
                            ? <>
                                <img className="arrow-icon" src="/Assets/Images/ArrowDown.svg" alt="Down arrow" />
                                <span>Lower than average</span>
                            </>
                            : lastSystolic > avgSystolic
                                ? <>
                                    <img className="arrow-icon" src="/Assets/Images/ArrowUp.svg" alt="Up arrow" />
                                    <span>Higher than average</span>
                                </>
                                : "Equal to average"}
                    </p>
                </div>
                <hr></hr>
                <div className="summary-item">
                    <div className="summary-heading">
                        <span className="marker diastolic-marker"></span>
                        <span>Diastolic</span>
                    </div>

                    <h2>{lastDiastolic ?? "--"}</h2>

                    <p>{lastDiastolic == null
                        ? "No data available"
                        : lastDiastolic < avgDiastolic
                            ? <>
                                <img className="arrow-icon" src="/Assets/Images/ArrowDown.svg" alt="Down arrow" />
                                <span>Lower than average</span>
                            </>
                            : lastDiastolic > avgDiastolic
                                ? <>
                                    <img className="arrow-icon" src="/Assets/Images/ArrowUp.svg" alt="Up arrow" />
                                    <span>Higher than average</span>
                                </>
                                : "Equal to average"}
                    </p>

                </div>
            </div>
        </div>
        <div style={{ display: "flex" }}>
            <div className="card diagnostic-extrainfo1">
                <img className="" src="/Assets/Images/respiratory rate.svg" alt="searchIcon"></img>
                <p>Respiratory Rate</p>
                <h1>{patient[3]?.diagnosis_history?.[0]?.respiratory_rate?.value ?? "--"} bpm</h1>
            </div>
            <div className="card diagnostic-extrainfo2">
                <img className="" src="/Assets/Images/temperature.svg" alt="searchIcon"></img>
                <p>Temperature</p>
                <h1>{patient[3]?.diagnosis_history?.[0]?.temperature?.value ?? "--"}°F</h1>
            </div>
            <div className="card diagnostic-extrainfo2">
                <img className="" src="/Assets/Images/HeartBPM.svg" alt="searchIcon"></img>
                <p>Heart Rate</p>
                <h1>{patient[3]?.diagnosis_history?.[0]?.heart_rate?.value ?? "--"} bpm</h1>
            </div>
        </div>


    </div>

}
export default Diagnosis_history;
