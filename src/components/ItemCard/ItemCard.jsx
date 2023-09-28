import "./ItemCard.scss";
import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  return (
    <div className="tarjetita">
      <img className="imgProd" src={item.img} alt={item.nombre} />
      <h4>{item.nombre}</h4>
      <p className="mb-6">Price: ${item.precio}</p>
      {/* <button className='more_details btn btn-primary'>+ details</button> */}
      <Link to={`/detail/${item.id}`} className="more_details">
        + details
      </Link>
    </div>
  );
};

export default ItemCard;
