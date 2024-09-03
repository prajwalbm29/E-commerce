import React from "react";
import './NewsLetter.css'

function NewsLetter() {
    return (
        <div className="newsletter">
            <h1>Get Exclusive Ofers on Your Email</h1>
            <p>Subscribe to out newletter and stay upadated</p>
            <div>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter