import './ItemListStyles.css'
import { Link } from 'react-router-dom'
import {Col} from "reactstrap"; 

function ItemList({ producto }) {
    return (

        <Col xs="12" lg="4" className="mx-auto art">
            <div className="itemCard">
                <figure>
                    <img className="img-fluid fotoItemList" src={`${producto.foto}`} alt=""></img>
                </figure>
                <div className="text-center infoBox">
                    <h1 className="nombreProducto">{producto.nombre}</h1>
                    <Link to={`/item/${producto.id}`} className="ver">ver</Link>
                </div>
            </div>
        </Col>

    )
}

export default ItemList;