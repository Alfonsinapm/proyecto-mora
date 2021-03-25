import ItemDetail from './ItemDetail'
import { Productos } from './Productos'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    
    const { itemid } = useParams()
    
    const promesaProducto = new Promise((resolve, reject) => {
            const prodSeleccionado = Productos.find(producto => Number(producto.id) === Number(itemid))
            resolve(prodSeleccionado);
            reject(new Error('fail')).then(function() {
                // not called
              }, function(error) {
                console.error(error); // Stacktrace
              });
    })

    const llamadoProducto = () => {
        promesaProducto.then((respuesta) => setProducto(respuesta))
    }
    useEffect(() => {
        llamadoProducto();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemid]);

    return (
        <section className="container contTotal">
            {
                producto !=null ?
                    <div className="row" id="ItemDetail">
                        {
                                <ItemDetail
                                    key={producto.id}
                                    img={producto.foto}
                                    nombre={producto.nombre}
                                />
                        }
                    </div>
                    :
                    <p className="mensaje">No existe ese producto</p>
            }

        </section>
    )

}

export default ItemDetailContainer
