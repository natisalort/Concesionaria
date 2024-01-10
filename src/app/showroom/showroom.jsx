import React from "react";
import "./showroom.css";
import imgShow from "../../img.banner/showroom.jpg"
export const Showroom =()=>{
    return(
        <div className="container-show">
            <img src={imgShow} style={{width:"100%"}}></img>
            <h3>Direccion ...</h3>
            <h4>De lunes a viernes en el horario de 9 a 20 hs. 
                Sabados de 9 a 13 hs.
            </h4>
        </div>
    )
}
export default Showroom;