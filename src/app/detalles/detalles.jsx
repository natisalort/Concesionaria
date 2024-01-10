import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import jsonData from "./../productos/data.json";
import "./detalles.css";
import Gallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export const Detalles = () => {
    const { id } = useParams();
    const [prod, setProd] = useState(null);
    const [images, setImages] = useState([]);
    useEffect(() => {
        const product = jsonData.find((x) => x.id == id);
        setProd(product);
        setImages(product ? product.img : []);

    }, [id]);
    if (!prod) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Gallery items={images.map((img) => ({ original: img, thumbnail: img, description: `` }))}
                autoPlay={false}
            />

            <div className="body-details">
                <h5 className="card-title">{prod.marca}</h5>
                <p className="card-text">{prod.modelo} - {prod.year}</p>
                <p className="card-text">{prod.detalles}</p>
                <Link to={`/todos`}>cerrar</Link>
            </div>
        </>
    );
}
export default Detalles