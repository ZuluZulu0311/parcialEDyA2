import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BtnAgregar from './BtnAgregar'
import Imagenes from './Imagenes'
import Buscar from './Buscar'

function App() {
  const [count, setCount] = useState(0)
  const [imagenes, setImagenes] = useState([])
  let imagenFiltrada = false;
  let imagen = {};
  const addCount = (count) => {
    setImagenes([...imagenes, { id: count, src: "https://picsum.photos/200/300?random=" + count }])
    setCount(count + 1)
  }

  



  return (
    <>
      <Buscar imagenes = {imagenes}/>

      <br />

      {  
        imagenes.map(imagen => (<Imagenes key={imagen.id} srcImg={imagen.src} title={imagen.id} />))
      }

      <br />
      <BtnAgregar count={count} incremento={addCount} />
    </>
  )

}

export default App
