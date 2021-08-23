import logo from "../../../assets2/logo.png";
import "./Header.css";
import BurgerMenuContainer from './BurgerMenu/BurgerMenuContainer'
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap';


const Header = () => {
    return (
        <header className="header-container">
            <Container>
                <Row>
                    <Col xs="12" lg="1" className=""><figure className="figure-logo">
                        <Link to="/"> <img src={logo} alt="logo" className="img-fluid" />
                        </Link>
                    </figure></Col>
                    <Col xs="12" md="11"><nav className="nav-header d-none d-lg-block">
                        <ul className="ul-header">
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/accesorios"}>accesorios</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/mantas"}>mantas</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/almohadas"}>almohadones</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/colchones"}>colchones</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/juegos"}>juegos</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/mobiliario"}>mobiliario</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/nidos"}>nidos</Link></li>
                            <li className="liHeader"><Link className="linkHeader" to={"/categoria/ropa"}>ropa</Link></li>
                        </ul>
                    </nav></Col>
                </Row>
            </Container>


            <div className="d-lg-none">
                <BurgerMenuContainer />
            </div>

        </header>
    )
}

export default Header
