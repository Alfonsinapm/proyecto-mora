import { useState, useEffect } from 'react';
import {Productos} from './Productos'
import ItemList from './ItemList';

import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [producto, setProductos] = useState([]);

    const { categ } = useParams();
    console.log(categ)

    const promesaProd = new Promise((resolve, reject) => {
        setTimeout(() => resolve(Productos), 2000)
    })

    const llamadoProductos = () => {
        promesaProd.then(
            (respuesta) => {
                const prodCat = respuesta.filter(
                  (producto)=>  producto.categoria === categ)
                setProductos(prodCat)
            })
    }

    useEffect(
        () => llamadoProductos(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [categ]
    )
    return (
        <section className="container" id="ItemDetailContainer">

            {
                producto.length ?
                    <>
                        <div className="row" id="ItemDetail">
                            {
                                producto.map(producto => (
                                    <ItemList
                                        producto={producto}
                                    />
                                ))
                            }
                        </div>
                    </> :
                    <p className="mensaje">Cargando productos...</p>
            }

        </section>
    )
}

export default ItemListContainer;