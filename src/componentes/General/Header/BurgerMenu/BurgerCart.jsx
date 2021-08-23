import {GiHamburgerMenu} from 'react-icons/gi';
import './BurgerStyles.css';

const BurgerCart = ({ action }) => {
    return (
        <div className="">
            <GiHamburgerMenu className="burgerIcon" onClick={action} />
        </div>
    )
}

export default BurgerCart;
