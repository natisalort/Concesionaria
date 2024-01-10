import React, { useState, useEffect } from "react";
import "./productos.css";
import jsonData from "./data.json";
import { Link, useParams } from 'react-router-dom';

export function Filter() {
    const { marca, year } = useParams();
    const [productos, setProductos] = useState([]);

    const prod = jsonData || [];

    const filter = () => {
        let filterProducts = [];
        if (year === "Todos" ) {
            if(marca!=="Todos"){
                filterProducts = prod.filter((i) => i.marca === marca);
            }else{
                filterProducts=prod;
            }
        }

        if (marca === "Todos") {
            if( year!=="Todos"){
           
                filterProducts = prod.filter((producto) => {
                    const productoYear = Number(year);
                    return producto.year === productoYear;
                });
            }
        }

        if (marca !== "Todos" && year !== "Todos") {
           
            filterProducts = prod.filter((producto) => {
                const productoYear = Number(year);
                return producto.year === productoYear && producto.marca === marca
            });
        }
        setProductos(filterProducts);
    }

    useEffect(() => {
        filter();
    }, [marca, year])

    return (
        <>
            <div className="info">
                <h3>{marca}  {year}</h3>
            </div>

            <div className="contenedor">
                {productos && productos
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
export default Filter;