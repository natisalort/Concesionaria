import React, { useState, useEffect } from 'react';
import jsonData from "../app/productos/data.json";
import "./inicio.css";
import { Link } from 'react-router-dom';
export const Inicio = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const prod = jsonData;
        const filterProducts = prod.filter((i) => i.novedad === true).slice(0, 4)

        setProductos(filterProducts);
    }, [])

    return (
        <>
        <h1 className='new'>Nuevos ingresos</h1>
        <div className='container-inicio'>
            {productos.map((prod) => (
                <div key={prod.id}
                    className="card-new" >
                    <img src={prod.img[0]} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="title">{prod.marca}  {prod.modelo}</h5>
                        <p>{prod.año}</p>
                        <Link to="/">Ver</Link>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Inicio