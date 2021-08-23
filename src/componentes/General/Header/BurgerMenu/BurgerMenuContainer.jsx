import { useState } from 'react'
import BurgerCart from "./BurgerCart";
import BurgerMenu from "./BurgerMenu";
import './BurgerStyles.css'

const BurgerMenuContainer = () => {
    const [showWidgetCart, setWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setWidgetCart(!showWidgetCart);
    };

    return (
        <div className="cont-burger">
            <BurgerCart className="burgerCart" action={openWidgetCart} />
            <BurgerMenu show={showWidgetCart} action={openWidgetCart} />
        </div>
    )
}

export default BurgerMenuContainer
