import ItemDetail from './ItemDetail'
import { Productos } from './Productos'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    let [item, setItem] = useState([]);
    const { itemid } = useParams()

    const promesaProducto = new Promise((resolve, reject) => {
        setTimeout(() => {
            const prodSeleccionado = Productos.find(producto => producto.Id == itemid)
            resolve(prodSeleccionado);
        }, 2000)
    })

    const llamadoProducto = () => {
        promesaProducto.then((respuesta) => setProducto(respuesta))
    }
    useEffect(() => {
        llamadoProducto();
    }, []);

    return (
        <section className="container" id="ItemDetailContainer">
            {
                item.length ?
                    <div className="container-fluid" id="ItemDetail">
                        {
                            item.map(item => (
                                <ItemDetail
                                    key={item.id}
                                    img={item.foto}
                                    nombre={item.nombre}
                                />
                            ))
                        }
                    </div>
                    :
                    <p className="mensaje">No existe ese producto...</p>
            }

        </section>
    )

}

export default ItemDetailContainer
