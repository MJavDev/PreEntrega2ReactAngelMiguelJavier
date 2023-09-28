import { useEffect, useState, useRef } from "react";
import "./ItemListContainer.scss";
import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  const ref = useRef();

  useEffect(() => {
    setLoading(true);

    pedirDatos()
      .then((r) => {
        if (categoryId == "all") {
          setProductos(r);
          /* muestro todo */
        } else if (categoryId) {
          setProductos(r.filter((prod) => prod.category === categoryId));
          /* si categoryId tiene algun valor, busca coincidencia */
        } else {
          setProductos(r);
        }
      })
      .catch((e) => console.log(e))
      .finally(() => {
        setLoading(false);
        /* if( categoryId != undefined)
                    setTimeout(()=>{ref.current.scrollIntoView({"behavior":"smooth"});})
                else {
                    setTimeout(()=>{window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });})
                }; */
      });
  }, [categoryId]);

  return (
    <div ref={ref} className="store">
      {loading ? <h2>Loading...</h2> : <ItemList productos={productos} />}
    </div>
  );
};

export default ItemListContainer;
