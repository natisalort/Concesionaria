import React, { useState, useEffect } from "react";
 import "./productos.css";
 import jsonData from "./data.json" ;
import { Link } from "react-router-dom";

export function Todos() {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {
        setProductos(jsonData);
    }, [])
    
    return (
        <>
            <div className="info">
                <h3>¡ Novedades !</h3>
               
            </div>

            <div className="contenedor">
                { productos
                .map((prod) => (
                    <div key={prod.id}
                        className="card" style={{ width: "14rem" }}>
                        <img src={prod.img[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{prod.marca}</h5>
                            <p className="card-text">{prod.modelo} - {prod.year}</p>
                            <Link to={`/detalles/${prod.id}`}>Ver mas</Link>
                        </div>
                    </div>
                ))}

            </div>

        </>
    )
}
