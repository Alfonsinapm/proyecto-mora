import './ItemListStyles.css'
import { Link } from 'react-router-dom'

function ItemList({ producto }) {
    return (

        <article className="mx-auto  col-12 col-md-4 art">
            <div className="itemCard">
                <figure>
                    <img className="img-fluid fotoItemList" src={`${producto.foto}`} alt=""></img>
                </figure>
                <div className="text-center infoBox">
                    <h1 className="nombreProducto">{producto.nombre}</h1>
                    <Link to={`/item/${producto.id}`} className="ver">ver</Link>
                </div>
            </div>
        </article>

    )
}

export default ItemList;