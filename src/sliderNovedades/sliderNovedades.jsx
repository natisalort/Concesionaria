import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sliderNovedades.css";
import logo1 from "../img.banner/logotipo1.jpeg";
import logo2 from "../img.banner/logo2.jpeg";
import logo3 from "../img.banner/Generamos tu credito.png";
import img4 from "../img.banner/showroom.jpg";

export function Novedades() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2, // Número de tarjetas a mostrar al mismo tiempo
    slidesToScroll: 1,
    autoplay: true, // Activar el autoplay
    autoplaySpeed: 4000, // Velocidad del autoplay en milisegundos (4 segundos en este caso)
    responsive: [
      {
        breakpoint: 500, // En pantallas de 500px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1000, // En pantallas de 1000px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container-carousel">
      <div className="info">
        <h3>Nuestra seriedad, tu confianza.</h3>
      </div>
      <Slider {...sliderSettings} className="slider">

        <div className="car" >
          <img src={logo2} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Consultanos!!</h5>
            <p className="card-text">De lun a vie de 8 a 20 hs.</p>
          </div>
        </div>
        <div className="car" >
          <img src={logo1} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">"Cotizamos tu usado al mejor precio."</h5>
            

          </div>
        </div>
        <div className="car" >
          <img src={img4} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">"Conoce nuestro showroom"</h5>
            <p className="card-text">Av. no se donde 4545</p>

          </div>
        </div>
        <div className="car" >
          <img src={logo3} className="card-img-top" width={"50%"} height={"75%"} alt="..." />
          <div className="card-body">
            <h5 className="card-title">Generamos tu credito </h5>
            <p className="card-text">De lun a vie de 8 a 20 hs.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
