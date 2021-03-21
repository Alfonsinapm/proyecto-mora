
import { useHistory } from 'react-router-dom'

const ItemDetail = ({ img, nombre }) => {
    
    const history = useHistory();
    return (
        <section className="detailContainer">
            {/* <div className="detailContainer-nameBox">
                <h1 className="">{nombre}</h1>
            </div> */}
            
            <button className="volver" onClick={() => history.goBack()}>volver</button>
            <figure className="detailContainer-imgFigure">
                <img src={img} className="img-fluid detailImg" alt="" />
            </figure>           
        </section>
    )
}

export default ItemDetail
