import {GiHamburgerMenu} from 'react-icons/gi';

const BurgerCart = ({ action }) => {
    return (
        <div>
            <GiHamburgerMenu className="burgerIcon" onClick={action} />
        </div>
    )
}

export default BurgerCart;
