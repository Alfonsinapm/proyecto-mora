import Carrousel from './Carrousel'
import Nosotros from './Nosotros'
import Redes from './Redes'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <Carrousel/>
            <Nosotros/>
            <Redes className="compRedes"/>
           
        </div>
    )
}

export default Home
