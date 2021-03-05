import Carrousel from './Carrousel'
import Nosotros from './Nosotros'
import Redes from './Redes'


const Home = () => {
    return (
        <div>
            <Carrousel/>
            <Nosotros/>
            <Redes className="compRedes"/>
        </div>
    )
}

export default Home
