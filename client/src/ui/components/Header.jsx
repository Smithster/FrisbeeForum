import React from "react";

const Header = (props) => {

    const setPage = function (value){
        props.setPage(value);
    }

    return <>
        <div className="header-container">
            <div className="header-title">Frisbeeum</div>
            <div className="header-link" onClick={() => setPage('home')}>Home</div>
            <div className="header-link" onClick={() => setPage('settings')}>Settings</div>
            <div className="header-link" onClick={() => setPage('profile')}>Profile</div>
        </div>
    </>
}

export default Header;