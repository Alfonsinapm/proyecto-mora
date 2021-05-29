import logo from "../../../assets2/logo.png";
import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';
import { useState } from "react";

const Header = () => {
    return (
        <header className="header">
            <figure className="figure">
                <Link to="/"> <img src={logo} alt="logo" className="figure-logo" />
                    </Link>
            </figure>
            <nav className="nav">
                <ul className="nav-ul">
                    <Link className="liHeader" to={"/categoria/accesorios"}>accesorios</Link>
                    <Link className="liHeader" to={"/categoria/mantas"}>mantas</Link>
                    <Link className="liHeader" to={"/categoria/almohadas"}>almohadones</Link>
                    <Link className="liHeader" to={"/categoria/colchones"}>colchones</Link>
                    <Link className="liHeader" to={"/categoria/juegos"}>juegos</Link>
                    <Link className="liHeader" to={"/categoria/mobiliario"}>mobiliario</Link>
                    <Link className="liHeader" to={"/categoria/nidos"}>nidos</Link>
                    <Link className="liHeader" to={"/categoria/ropa"}>ropa</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
