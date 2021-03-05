import './Home.css'
import { SiInstagram } from "react-icons/si";
 import { FiPhoneCall } from "react-icons/fi";

const Redes = () => {
    return (
        <div className="RedCont">
           <div className="RedCont-insta">
               <a href="https://www.instagram.com/mora_babyss/">
                <SiInstagram className="instagram" />
            </a>
            <span className="name-insta">/mora_babyss</span>
           </div>
           <div className="RedCont-cel">
               <FiPhoneCall className="phone"/>
               <p className="number">099320867</p>
           </div>
            
        </div>
    )
}

export default Redes
