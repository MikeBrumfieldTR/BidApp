import { useEffect, useState } from 'react'
import './menu.css'

export default function Menu() {

    return (
        <div className="menu-container">
            <div className="brand">
                <p>ART BID</p>
            </div>
            <div className="view-selector">
                <a>
                    <p className="view-item">ALL ARTWORK</p>
                </a>
                <a>
                    <p className="view-item">YOUR BIDS</p>
                </a>
            </div>
        </div>
    )
}