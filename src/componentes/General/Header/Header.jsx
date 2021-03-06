import logo from '../../../assets2/logo.png'
import './Header.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="header">
            <figure className="figure">
                
                <Link to="/"> <img src={logo} alt="logo" className="figure-logo" />
                    </Link>
            </figure>
            <nav className="nav">
                <ul className="nav-ul">
                    <li>accesorios</li>
                    <li>mantas</li>
                    <li>almohadones</li>
                    <li>colchones</li>
                    <li>juegos</li>
                    <li>mobiliario</li>
                    <li>nidos</li>
                    <li>ropa</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header


