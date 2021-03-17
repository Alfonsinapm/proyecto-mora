import React from 'react'

const ItemDetail = ({ img, nombre }) => {
    return (
        
        <section className="row ItemDetail_Container">
            <figure className=" col-12 col-md-6 text-right">
                <img src={img} className="img-fluid ItemDetail_img" alt="" />
            </figure>

            <div className="col-12 col-md-6 ItemDetail_contDetalles d-flex align-items-center">
                <div className="ItemDetail_textos">
                    <h1 className="ItemDetail_Nombre">{nombre}</h1>
                    
                </div>
            </div>
        </section>
    
    )
}

export default ItemDetail
