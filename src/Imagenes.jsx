const Imagenes = ({ srcImg, title }) => {

    return (

        <>
        <img src={srcImg} title={title} ></img>
        <div>{title}</div>
        </>
    )
}

export default Imagenes;