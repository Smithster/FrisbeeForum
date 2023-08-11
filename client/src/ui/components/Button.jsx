import React from "react";

const Button = () => {

    const test = function () {
        document.getElementsByClassName('popup')[0].classList.toggle('hidden')
    }

    return <div className="button" onClick={test}>this is a test</div>
}

export default Button