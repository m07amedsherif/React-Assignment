import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg py-4 position-fixed w-100 top-0" style={{ zIndex: 1000 }}>
                <div className="container d-flex justify-content-between align-items-center">
                    <NavLink className="navbar-brand text-white p-0 m-0" style={{ fontSize: '2rem', fontWeight: 'bold', textTransform: 'uppercase' }} to="/">Start Framework</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/portfolio">Portfolio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>

            <div style={{ height: '95px', backgroundColor: '#1ABC9C' }}></div>

        </>
    )
}
