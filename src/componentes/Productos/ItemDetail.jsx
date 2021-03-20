import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ItemDetail = ({ img, nombre }) => {
    const { categ } = useParams();
    return (
        <section className="detailContainer">
            {/* <div className="detailContainer-nameBox">
                <h1 className="">{nombre}</h1>
            </div> */}
            {/* <Link className="" to={`/categoria/${categ}`}>atras</Link> */}
            <figure className="detailContainer-imgFigure">
                <img src={img} className="img-fluid detailImg" alt="" />
            </figure>           
        </section>
    )
}

export default ItemDetail
