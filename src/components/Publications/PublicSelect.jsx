import React, {useEffect, useState} from 'react';
import imgPublicacion from '../../images/publicacion.png'
import axios from 'axios'
import './publication.css'

const PublicSelect=()=>{

  const [publication, setDatosPublication] = useState([])

  const getDatosPublicacion = async () =>{
    const ruta = window.location.href
    const rutaId = ruta.substring(35, 59)
    
    const response = await axios.get(`http://localhost:8085/api/publications/${rutaId}`)
    console.log(response)

    setDatosPublication(response.data)
  }

  useEffect(() => {
    getDatosPublicacion()
  }, []
  )

  return (
    <body class="cuerpo">
      <header>
        <h2 class="title">{publication.title}</h2>
        <h1 class="subtitle">{publication.subtitle}</h1>
      </header>
      <main>
        <article class="menu-seleccion">
          <div>
            <img class="public" src={imgPublicacion} alt="publicacion"/>
            <p class="texto">{publication.description}</p>
          </div>
        </article>
      </main>
      <footer>
        <h4 class="datos">Autor: {publication.author}</h4>
        <h4 class="datos">Género: {publication.genre}</h4>
      </footer>
    </body>
  )
}

export default PublicSelect;