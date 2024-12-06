import React from "react";
import "./Loading.css";

export default function Loading() {
    return (
        <div className="loading-container">
            <img src="/../../../public/logo.svg" alt="Logo" className="loading-logo" />
            <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
        </div>
    );
}