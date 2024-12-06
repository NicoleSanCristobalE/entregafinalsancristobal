import React from "react";
import "./../../styles/tab.css"

export default function Tab({ id, label, active = false }) {
    return (
        <li className="nav-item" role="presentation">
            <button
                className={`nav-link custom-tab ${active ? "active" : ""}`}
                id={`${id}-tab`}
                data-bs-toggle="pill"
                data-bs-target={`#${id}`}
                type="button"
                role="tab"
                aria-controls={id}
                aria-selected={active}>
                {label}
            </button>
        </li>
    );
}