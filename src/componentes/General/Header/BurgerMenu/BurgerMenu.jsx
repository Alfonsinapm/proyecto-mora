import { Link } from 'react-router-dom'
import './BurgerStyles.css'
const BurgerMenu = ({ show, action }) => {
    return (
        <div className={`widgetMenu ${show ? "open" : "close"}`} onClick={action}>
            <ul className="ulBurger">
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/accesorios"}>accesorios</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/mantas"}>mantas</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/almohadas"}>almohadones</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/colchones"}>colchones</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/juegos"}>juegos</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/mobiliario"}>mobiliario</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/nidos"}>nidos</Link></li>
                <li className="liBurger"><Link className="burgerLink" to={"/categoria/ropa"}>ropa</Link></li>
            </ul>
        </div>
    )
}

export default BurgerMenu
