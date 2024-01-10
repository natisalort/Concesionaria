import React, { useState, useRef, useEffect } from "react";
import "./navBar.css";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import jsonData from "./../app/productos/data.json";

export const NavBar = () => {
    const navigate = useNavigate();
    const [menuAbierto, setMenuAbierto] = useState(false);
    const menuRef = useRef(null);
    const prod = jsonData;
    const [datosMarcas, setDatosMarcas] = useState([]);
    const [marca, setMarca] = useState("")
    const [datosyear, setDatosYear] = useState([]);
    const [year, setYear] = useState("");

    const filter = () => {
        navigate(`/filter/${marca}/${year}`)
    }

    const manejarAlternarMenu = () => {
        setMenuAbierto(!menuAbierto);
    };


    useEffect(() => {

        const fetchDatos = async () => {
            try {
                const nombresUnicos = new Set(prod.map(item => item.marca));
                setDatosMarcas(Array.from(nombresUnicos));


                if (marca !== "Todos") {
                    const opcionesDeMarca = prod.filter(option => option.marca === marca);
                    const yearsUnicos = new Set(opcionesDeMarca.map(item => parseInt(item.year, 10)).sort((a, b) => a - b));
                    setDatosYear(Array.from(yearsUnicos));
                } else {
                    const yearsUnicos = new Set(prod.map(item => item.year).sort((a, b) => a - b));
                    setDatosYear(Array.from(yearsUnicos));

                }
            } catch (error) {
                console.error('Error al procesar el JSON:', error);
            }
        };

        fetchDatos();
        setYear("Todos")
    }, [marca]);

    useEffect(() => { //Efecto para actualizar marca y year cada vez que se seleccione una opcion.
        filter()
    }, [marca, year])

    // Efecto adicional para manejar acciones después de la actualización de datosMarcas
    useEffect(() => {
        const handleClickFuera = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuAbierto(false);
            }
        };

        // Agrega el manejador de eventos después de definir las funciones
        document.addEventListener('mousedown', handleClickFuera);

        // Limpia el evento al desmontar el componente
        return () => {
            document.removeEventListener('mousedown', handleClickFuera);
        };

    }, []);


    return (
        <div className="container-nav">
            <div className="icono-menu" onClick={manejarAlternarMenu}>
                <span className={`material-symbols-outlined ${menuAbierto ? 'abierto' : ''}`}>
                    menu
                </span>
            </div>

            <div ref={menuRef} className={`contenedor-menu ${menuAbierto ? 'activo' : ''}`}>
                <nav className="menu">
                    <ul>
                        <li ><Link to="/"><button type="button" className=" btn btn-sm btn-secondary">Inicio</button></Link></li>
                        <li><Link to="/todos"><button type="button" className=" btn btn-sm btn-secondary" >Ver todos</button></Link></li>

                        <li><Link to="/showroom"><button type="button" className=" btn btn-sm btn-secondary">Showroom</button></Link></li>
                    </ul>
                </nav>
                <div className="icono-cerrar" onClick={manejarAlternarMenu}>

                </div>
            </div>
            <div className="filtros">

                <Select className="selectedName"
                    defaultValue={{ label: "Buscar por marca", value: "Todos" }}
                    options={[
                        { label: "Ver Todos", value: "Todos" },  // Opción "Ver Todos" agregada
                        ...datosMarcas.map(marca => ({ value: marca, label: marca.toString() }))
                    ]}
                    onChange={(selectedOption) => {
                        setMarca(selectedOption.value);
                    }}
                />

                <Select className="selectedYear"
                    defaultValue={{ label: "Año", value: "Todos" }}
                    options={[
                        { label: "Ver Todos", value: "Todos" },  // Opción "Ver Todos" agregada
                        ...datosyear.map(year => ({ value: year, label: year.toString() }))
                    ]}
                    onChange={(selectedOption) => {
                        setYear(selectedOption.value);
                    }}
                />
            </div>
        </div>

    );
}
export default NavBar;


