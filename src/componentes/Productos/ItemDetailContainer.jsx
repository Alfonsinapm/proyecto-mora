import ItemDetail from './ItemDetail'
import { Productos } from './Productos'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    
    const { itemid } = useParams()
    
    const promesaProducto = new Promise((resolve, reject) => {
            const prodSeleccionado = Productos.find(producto => Number(producto.id) === Number(itemid))
            resolve(prodSeleccionado);
    })

    const llamadoProducto = () => {
        promesaProducto.then((respuesta) => setProducto(respuesta))
    }
    useEffect(() => {
        llamadoProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemid]);

    return (
        <section className="container">
            {
                producto   ?
                    <div className="container-fluid" id="ItemDetail">
                        {
                            
                                <ItemDetail
                                    key={producto.id}
                                    img={producto.foto}
                                    nombre={producto.nombre}
                                />
                           
                        }
                    </div>
                    :
                    <p className="mensaje">No existe ese producto...</p>
            }

        </section>
    )

}

export default ItemDetailContainer
