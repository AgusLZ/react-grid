import "./styles/Imagen.css";
const alturas = [260, 153, 300];

const imgs = ["./img/260.jpg", "./img/153.jpg", "./img/300.jpg", "./img/301.jpg", "./img/302.jpg", "./img/303.jpg", "./img/304.jpg", "./img/305.jpg", "./img/306.jpg", "./img/307.jpg", "./img/308.jpg", "./img/309.jpg"];
const Imagen = () => {
  const indexRnd = Math.floor(Math.random() * imgs.length);
  const urlImg = imgs[indexRnd];
  const altura = alturas[indexRnd];
  return (
    <img
      src={urlImg}
      alt="texto"
      width="230px"
      height={altura}
    />
    
  );
};

export default Imagen;
