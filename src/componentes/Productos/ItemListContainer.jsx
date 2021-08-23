import { useState, useEffect } from 'react';
import {Productos} from './Productos'
import ItemList from './ItemList';
import {Container, Row} from "reactstrap"; 
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    const [producto, setProductos] = useState([]);
    const { categ } = useParams();
    
 
    const promesaProd = new Promise((resolve, reject) => {
        resolve(Productos);
        reject(new Error('fail')).then(function() {
            // not called
          }, function(error) {
            console.error(error); // Stacktrace
          });
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
        <Container className="container ItemListContainer">
            {
                producto.length>0 ?
                    <>
                        <Row className="row" id="ItemDetail ">
                            {
                                producto.map(producto => (
                                    <ItemList
                                        key={producto.id}
                                        producto={producto}
                                    />
                                ))
                            }
                        </Row>
                    </> :
                    <p className="mensaje">Cargando productos...</p>
            }
        </Container>
    )
}

export default ItemListContainer;