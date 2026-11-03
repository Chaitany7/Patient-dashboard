import React from 'react';

function Patient(props) {
    return <div style={{ display: "flex", position: "relative" }}>
        <img className="patient-list-profile-pic" src={props.profile_photo} alt="patient_pic"></img>
        <div>
            <p className='patientname-list'>{props.name}</p>
            <p className='patientdetail-list'>{props.gender}, {props.age}</p>
        </div>
        <img className="horizontal_moreOption" src="/Assets/Images/more_optionhoriz.svg" alt="moreOptions"></img>
    </div>
}

export default Patient;