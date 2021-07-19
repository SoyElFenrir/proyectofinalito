import React, {createRef} from 'react';
import { Form, Button } from 'antd';
import { Typography } from 'antd';
import {SaveFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'moment/locale/es';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { message } from 'antd';

const baseUrl="http://localhost:8085/api/publications/";

const {Item} = Form;
const {Title} = Typography;

function activarGrabado(){
  document.getElementById('ocultar').disabled = false
}

function armarJson(title, subtitle, author, genre, description){
  const datos = [];
  const objecto = {};
  datos.push({ 
    "title"    : title,
    "subtitle"  : subtitle,
    "author"    : author,
    "genre"    : genre,
    "description"  : description
  });

  objecto.datos = datos;
  console.log(objecto.datos);
  return objecto
}

function grabar(){
 
  const formRef=createRef();

  const validandoDatos = (datos) => {
    
    let titulo = (datos.title === undefined) ? localStorage.getItem('title') : datos.title

    let subtitulo = (datos.subtitle === undefined) ? localStorage.getItem('subtitle') : datos.subtitle

    let autor = (datos.description === undefined) ? localStorage.getItem('description') : datos.description

    let genero = (datos.author === undefined) ? localStorage.getItem('author') : datos.author

    let Descripcion = (datos.genre === undefined) ? localStorage.getItem('genre') : datos.genre

    let cambios = armarJson(titulo, subtitulo, autor, genero, Descripcion)
    console.log("cambios1", cambios)
    return cambios 

  }

  const grabar = async (datos) => {
    
    let baseAxios = await baseUrl + localStorage.getItem('_id')

    console.log('ruta para el Put: ', baseAxios)

    console.log('Formulario enviado exitosamente: ',datos);

    let cambios2 = validandoDatos(datos)

    console.log('cambios2',cambios2.datos[0])
    
    let res = await axios({
      method: 'put',
      url: baseAxios,
      data: {
        "title":cambios2.datos[0].title,
        "subtitle":cambios2.datos[0].subtitle,
        "author":cambios2.datos[0].author,
        "genre":cambios2.datos[0].genre,
        "description":cambios2.datos[0].description
      }
    })
    let data = res.data
    console.log(data)
    message.success('Modificado con Éxito');
  }

  const formSuccess=(datos)=>{
    grabar(datos)
  }

  const formFailed=(error)=>{
    console.log('Error: ',error)
  }
  
  const borrarCampos=()=>{
    formRef.current.resetFields();
  }

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 12,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 4,
      },
      sm: {
        span: 20,
      },
    },
  };

  return (
    
    <div>

        <Form name='formulario' initialValues={{recordar: true}}onFinish={formSuccess}onFinishFailed={formFailed}ref={formRef}{...formItemLayout}>
          <Title style={{color:'black',textAlign:'center', textSizeAdjust:'auto'}}>Complete los Datos para la Publicación</Title>
          
          <Item label='Title' name='title' ><TextField   
                defaultValue={localStorage.getItem('title')} 
                id="Title"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline/>
          </Item>
          <Item label='Subtitle' name='subtitle' ><TextField
                defaultValue={localStorage.getItem('subtitle')} 
                id="Subtitle"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline/>
          </Item>
          <Item label='Author' name='author' /*rules={[{required: true, message: 'Ingrese el nombre de Autor'}]}*/><TextField
                defaultValue={localStorage.getItem('author')} 
                id="Author"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline/>
          </Item>
          <Item label='Genre' name='genre' /*rules={[{required: true, message: 'Ingrese el Genero'}]}*/><TextField
                defaultValue={localStorage.getItem('genre')} 
                id="Genre"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline/>
          </Item>
          <Item label='Description' name='description' /*rules={[{required: true, message: 'Ingrese la Descripción'}]}*/><TextField
                defaultValue={localStorage.getItem('description')} 
                id="Description"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline/>
          </Item>

          <Item style={{textAlign: 'center'}}>
            {/*<Button type='primary' htmlType='submit'>Grabar Publicación</Button>*/}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button htmlType='submit' onClick={borrarCampos}>Borrar Campos</Button>
          </Item>
        
          <Item style={{textAlign: 'center'}}>
            <Button onClick={activarGrabado}>Aceptar Cambios</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Button id="ocultar" type='primary' htmlType='submit' icon={<SaveFilled/>} disabled>Grabar</Button>
          </Item>

        </Form>

    </div>
  );
  
}

export default grabar;