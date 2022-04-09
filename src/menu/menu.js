import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './menu.css'

const routeChange = (route) =>{ 
    // window.location.href = route
  }

export default function Menu() {
    const navigate = useNavigate();
    return (
        <div className="menu-container">
            <div className="brand">
                <a href="/">
                    <p>ART BID</p>
                </a>
            </div>
            <div className="view-selector">
                <a href="/">
                    <p className="view-item">ALL ARTWORK</p>
                </a>
                <a>
                    <p className="view-item">ALL BIDS</p>
                </a>
            </div>
        </div>
    )
}