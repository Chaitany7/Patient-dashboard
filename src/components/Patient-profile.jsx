import React from "react";
import test from './test.json'
import Moreinfo from './Patientprofile-moreinfo'

function Patient_profile(props) {
    const DOJ = new Date(props.user[3].date_of_birth).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })

    const keys = ['Date Of Birth', 'Gender', 'Contact Info.', 'Emergency Contacts', 'Insurance Provider']
    const value = [DOJ, props.user[3].gender, props.user[3].phone_number, props.user[3].emergency_contact, props.user[3].insurance_type]

    return <div className="patient-profile">
        <img className="profile-pic" src="/Assets/Images/profile-pic.png" alt="doctor_profile"></img>
        <h3>{props.user[3].name}</h3>

        {keys.map((item, index) =>
            <Moreinfo key={index} index={index} context={item} content={value[index]} />
        )}

        <button>Show All Information</button>
    </div >
}

export default Patient_profile;