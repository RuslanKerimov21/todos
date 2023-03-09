import './Badge.css'
import React from "react";
const Badge = ({ hex, onClick }) => (
    <i className="badge" onClick={onClick} style={{ background: hex }}></i>
)
export default Badge;