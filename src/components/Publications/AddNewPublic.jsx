import React, {createRef} from 'react';
import { Form, Input, Button, Col, Row} from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/es';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './NewPublic.css'

const baseUrl="http://localhost:8085/api/publications/";

const {Item} = Form;

const {Title} = Typography;

function Registrar(){
 
  const formRef=createRef();

  const formSuccess=(datos)=>{
    console.log('Formulario enviado exitosamente: ',datos);
    axios({
      method: 'post', 
      url: baseUrl,
      data: {
        "title":datos.title,
        "subtitle":datos.subtitle,
        "author":datos.author,
        "genre":datos.genre,
        "description":datos.description
      }
    })
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
            
            <Item label='Title' name='title' rules={[{required: true, message: 'Ingrese el Título'}]}><TextField 
                  id="Title"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline/>
            </Item>
            <Item label='Subtitle' name='subtitle' rules={[{required: true, message: 'Ingrese el Subtitulo'}]}><TextField
                  id="Subtitle"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline/>
            </Item>
            <Item label='Author' name='author' rules={[{required: true, message: 'Ingrese el nombre de Autor'}]}><TextField
                  id="Author"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline/>
            </Item>
            <Item label='Genre' name='genre' rules={[{required: true, message: 'Ingrese el Genero'}]}><TextField
                  id="Genre"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline/>
            </Item>
            <Item label='Description' name='description' rules={[{required: true, message: 'Ingrese la Descripción'}]}><TextField
                  id="Description"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline/>
            </Item>

            <Item style={{textAlign: 'center'}}>
              <Button type='primary' htmlType='submit'>Registrar Usuario</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button htmlType='submit' onClick={borrarCampos}>Borrar Campos</Button>
            </Item>
          </Form>

    </div>
  );
  
}

export default Registrar;