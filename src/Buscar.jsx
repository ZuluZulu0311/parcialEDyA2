import { useState } from "react"
import Imagenes from "./Imagenes"

const Buscar = ({ imagenes }) => {
    const [value, setValue] = useState('')
    const [imagenFiltrada, setImagenFiltrada] = useState(imagenes);

    const handleFilter = (event) => {
        setValue(event.target.value)
        const value = event.target.value;
        const filtrado = imagenes.filter(imagenes => imagenes.id == value);
        setImagenFiltrada(filtrado);
    };
    /*const filtrar = (filtro) => {
    
        imagen = imagenes.find(imagen => imagen.id == filtro)
        if(imagen){
          imagenFiltrada = true;
        }
        console.log(imagenes.find(imagen => imagen.id == filtro), imagenFiltrada)
      }*/
    return (
        <>
            {imagenFiltrada.map(imagen => (<><p>Usted buscó la imagen con titulo {imagen.id}</p><Imagenes key={imagen.id} srcImg={imagen.src} title={imagen.id} /></>))}
            <input placeholder="Buscar por titulo" value={value} onChange={handleFilter} />

        </>

    )
}

export default Buscar;