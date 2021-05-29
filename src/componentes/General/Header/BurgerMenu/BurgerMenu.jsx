import { Link } from 'react-router-dom'

const BurgerMenu = ({ show, action }) => {
    return (
        <div className={`widgetMenu ${show ? "open" : "close"}`} onClick={action}>
            <ul className="ulBurger">
                <li><Link className="burgerLi" to={"/categoria/muebles"}>MUEBLES</Link></li>
            </ul>
        </div>
    )
}

export default BurgerMenu
