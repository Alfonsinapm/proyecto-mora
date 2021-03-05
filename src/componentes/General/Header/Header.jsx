import logo from '../../../assets2/logo.png'
import './Header.css'
import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <figure className="figure">
                <img src={logo} alt="logo" className="figure-logo" />
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


