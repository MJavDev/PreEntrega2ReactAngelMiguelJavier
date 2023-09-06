const PortadaCate = (imagen) => {
  const style = {
    backgroundImage: imagen,
    height: "200px",
    backgroundSize: "cover",
  };

  return <div style={style}></div>;
};

export default PortadaCate;

/* 
const estilos = {
    maxWidth: '1600px',
    height: '32rem',
    backgroundImage: `url(${portada.img})`
}





<section className="w-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right" style={estilos}>

<div className="container mx-auto">
    <div className="flex flex-col w-full lg:w-1/2 justify-center items-start px-6 tracking-wide">
        <h2 className="text-black text-2xl text-center my-4 ">{portada.titulo}</h2>
    </div>
</div>
</section> */
