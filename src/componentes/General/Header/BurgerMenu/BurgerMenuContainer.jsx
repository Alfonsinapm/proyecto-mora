import { useState } from 'react'
import BurgerCart from "./BurgerCart";
import BurgerMenu from "./BurgerMenu";

const BurgerMenuContainer = () => {
    const [showWidgetCart, setWidgetCart] = useState(false);
    const openWidgetCart = () => {
        setWidgetCart(!showWidgetCart);
    };
    return (
        <div className="cont-burger">
            <div>
                <BurgerCart className="burgerCart" action={openWidgetCart} />
                <div>
                    <BurgerMenu show={showWidgetCart} action={openWidgetCart}/>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenuContainer
