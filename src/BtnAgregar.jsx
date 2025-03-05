const BtnAgregar = ({count, incremento}) => {
    return(
        <button onClick={()=>{incremento(count)}}>Agregar Imagen</button>
    )
}

export default BtnAgregar;