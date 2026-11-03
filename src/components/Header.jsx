import React, { useState } from "react";
import Navbarwidgets from "./Navbarwidgets"

function Header() {

    const [selected, setSelected] = useState();

    const navbarwidgets = [
        { icon: 'Overview', src: '/Assets/Images/home.svg' },
        { icon: 'Patients', src: '/Assets/Images/patient.svg' },
        { icon: 'Schedule', src: '/Assets/Images/calendar.svg' },
        { icon: 'Message', src: '/Assets/Images/chat.svg' },
        { icon: 'Transactions', src: '/Assets/Images/card.svg' }
    ]

    return <div className="header">

        <img className="logo" src="/Assets/Images/techcare.svg" alt="TechCare"></img>

        <div className="widgets-navbar">
            <nav className="navbar">
                {navbarwidgets.map((widget, index) =>
                    <Navbarwidgets
                        key={index}
                        name={widget.icon}
                        link={widget.src}
                        selected={selected === index}
                        onClick={() => setSelected(index)}
                    />
                )}
            </nav>
        </div>

        <div className="doctor-profile">
            <img className="doctor-img" src="/Assets/Images/doctor.png" alt="doctor_profile"></img>
            <div>
                <p id="doc-profile-para1">Dr. Jose Simmons</p>
                <p id="doc-profile-para2">General Practitioner</p>
            </div>
            <div className="divider"></div>
            <img className="profile-icon" src="/Assets/Images/settings.svg" alt="doctor_profile"></img>
            <img className="profile-icon" src="/Assets/Images/more-option.svg" alt="doctor_profile"></img>

        </div>


    </div>
}

export default Header;