import './Home.css'
import { SiInstagram } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const Redes = () => {
    return (
        <div className="RedCont">
            <div className="RedCont-insta">
                <a target='_blank' href="https://www.instagram.com/mora_babyss/" className="name-insta" rel="noreferrer" >
                    <SiInstagram className="instagram" />   /mora_babyss
                </a>
            </div>
            <div className="RedCont-cel">
                <FiPhoneCall className="phone" />
                <p className="number">099320867</p>
            </div>

        </div>
    )
}

export default Redes
