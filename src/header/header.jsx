import React from "react";
import logo from"../img.banner/Logo Animado Tienda de Tecnología Geométrico Verde Neón.mp4"
import "./header.css"
export function Header() {
    return (
       
        <div className="header">
             <video className="video" autoPlay loop muted>
                <source src={logo} type="video/mp4" />
                </video>
        </div>
      
    )
}
export default Header;
