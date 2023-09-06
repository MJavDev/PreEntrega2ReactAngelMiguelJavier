import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import PortadaCate from "../PortadaCate/PortadaCate";
import "./PortadaCat.scss";

const PortadaCat = () => {
  const fotos = [
    {
      category: "indoor",
      titulo: "Indoor Plants",
      img: "../../indoor.jpg",
    },
    {
      category: "outdoor",
      titulo: "Outdoor Plants",
      img: "../../outdoor2.jpg",
    },
    {
      category: "cactiesSucculents",
      titulo: "Cacti and Succulents",
      img: "../../cactus2.jpg",
    },
    {
      category: "all",
      titulo: "All Plants",
      img: "../../all2.jpg",
    },
  ];

  const [portada, setPortada] = useState("");

  const { categoryId } = useParams();

  useEffect(() => {
    if (categoryId) {
      setPortada(fotos.find((pic) => pic.category === categoryId));
    }
  }, [categoryId]);

  const estilos = {
    /* maxWidth: '1600px', */
    height: "16rem",
    backgroundImage: `url(${portada.img})`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "end",
    alignItems: "center",
  };

  return (
    <div className="">
      {portada && (
        <div className="imgPort" style={estilos}>
          <h2 className="titulo_portada">{portada.titulo}</h2>
        </div>
      )}
      {/* {portada && <PortadaCate imagen={portada.img}/>} */}
    </div>
  );
};

export default PortadaCat;
