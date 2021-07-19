import React, {useEffect, useState} from 'react';
import imgPublicacion from '../../images/publicacion.png'
import axios from 'axios'
import './publication.css'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

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

  const classes = useStyles();

  const capturaDatos = () => {
    localStorage.setItem('_id', publication._id)
    localStorage.setItem('title', publication.title)
    localStorage.setItem('subtitle', publication.subtitle)
    localStorage.setItem('description', publication.description)
    localStorage.setItem('author', publication.author)
    localStorage.setItem('genre', publication.genre)

    console.log('el titulo capturado es: ', localStorage.getItem('_id'))
  }

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
      <footer >
        <div > 
          <h4 class="datos">Autor: {publication.author}</h4>
          <h4 class="datos">Género: {publication.genre}</h4>
        </div>
        {/*<div class="boton-modificar" className={classes.root}>
          <Button class="datos" variant="outlined" color="primary">
            Modificar Publicación
          </Button>
        </div>*/}
        <div class="colocar">
          <div className={classes.root}>
            <Button variant="outlined" color="primary" onClick={capturaDatos}>
              <NavLink to='/editPublic'>
                Moficar Publicación
              </NavLink>
            </Button>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default PublicSelect;