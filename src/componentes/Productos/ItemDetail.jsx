

const ItemDetail = ({ img, nombre }) => {
    return (
        <section className="">
            <div className="">
                <h1 className="">{nombre}</h1>
            </div>
            <figure className=" ">
                <img src={img} className="img-fluid" alt="" />
            </figure>           
        </section>
    )
}

export default ItemDetail
