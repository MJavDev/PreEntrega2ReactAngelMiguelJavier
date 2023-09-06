import "./ItemDetail.scss";

const ItemDetail = ({ item }) => {
  return (
    <div className="detail_card">
      <img className="imgDetail" src={item.img} alt={item.nombre} />
      <div className="detail_info">
        <h2 className="detail_titulo">{item.nombre}</h2>
        <div dangerouslySetInnerHTML={{ __html: item.descripcion }} />
        <p className="detail_price">Price: ${item.precio}</p>
        <button className="add">Add to Cart</button>
      </div>
    </div>
  );
};

export default ItemDetail;
