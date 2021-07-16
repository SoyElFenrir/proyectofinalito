import React, {createRef} from 'react';
import { Form, Input, Button, Col, Row, Select } from 'antd';
import { Typography } from 'antd';
import {SaveFilled} from '@ant-design/icons';
import 'antd/dist/antd.css';
import 'moment/locale/es';
import Cookies from 'universal-cookie';
import axios from 'axios';
import { Popconfirm, message } from 'antd';

const baseUrl="http://localhost:8085/api/ussers/";
const cookies = new Cookies();

const {Item} = Form;
const {Password} = Input;
const {Option} = Select;
const {Title} = Typography;

function activarGrabado(){
  document.getElementById('ocultar').disabled = false
}

function armarJson(primerNombre, apellido, usuario, clave, correo, numero){
  const datos = [];
  const objecto = {};
  datos.push({ 
    "primerNombre"    : primerNombre,
    "apellido"  : apellido,
    "usuario"    : usuario,
    "clave"    : clave,
    "correo"  : correo,
    "numero"    : numero
  });

  objecto.datos = datos;
  console.log(objecto.datos);
  return objecto
}

function grabar(){
 
  const formRef=createRef();

  const validandoDatos = (datos) => {
    
    let primerNombre = (datos.firstName === undefined) ? cookies.get('firstName') : datos.firstName

    let apellido = (datos.lastName === undefined) ? cookies.get('lastName') : datos.lastName

    let usuario = (datos.usserName === undefined) ? cookies.get('usserName') : datos.usserName

    let password = (datos.password === undefined) ? cookies.get('password') : datos.password

    let clave = (datos.email === undefined) ? cookies.get('email') : datos.email

    let numero = (datos.phone === undefined) ? cookies.get('phone') : datos.phone

    let cambios = armarJson(primerNombre, apellido, usuario, password, clave, numero)
    console.log("cambios1", cambios)
    return cambios 
  }

  const grabar = async (datos) => {

    let datosUsuarios = await axios.get(baseUrl, {params: {usserName: cookies.get('usserName'), password: cookies.get('password')}})

    console.log('datos traidos del usuario: ', datosUsuarios)

    let baseAxios = await baseUrl + datosUsuarios.data[0]._id

    console.log('ruta para el Put: ', baseAxios)

    console.log('Formulario enviado exitosamente: ',datos);

    let cambios2 = validandoDatos(datos)

    console.log('cambios2',cambios2.datos[0])
    
    let res = await axios({
      method: 'put',
      url: baseAxios,
      data: {
        "firstName":cambios2.datos[0].primerNombre,
        "lastName":cambios2.datos[0].apellido,
        "usserName":cambios2.datos[0].usuario,
        "password":cambios2.datos[0].clave,
        "email":cambios2.datos[0].correo,
        "phone":cambios2.datos[0].numero
      }
    })
    let data = res.data
    console.log(data)
  }

  const formSuccess=(datos)=>{
    grabar(datos)
  }

  const formFailed=(error)=>{
    console.log('Error: ',error)
  }

  const confirm = async () => {
    let datosUsuarios = await axios.get(baseUrl, {params: {usserName: cookies.get('usserName'), password: cookies.get('password')}})

    console.log('datos traidos del usuario: ', datosUsuarios)

    let baseAxios2 = await baseUrl + datosUsuarios.data[0]._id

    console.log('pulso OK', baseAxios2);

    cookies.remove('id', {path: '/'});
    cookies.remove('firstName', {path: '/'});
    cookies.remove('lastName', {path: '/'});
    cookies.remove('usserName', {path: '/'});
    cookies.remove('password', {path: '/'});
    cookies.remove('email', {path: '/'});
    /*cookies.remove('sexo', {path: '/'});
    cookies.remove('dateNac', {path: '/'});*/
    cookies.remove('address', {path: '/'});
    cookies.remove('phone', {path: '/'});
    
    

    axios.delete(baseAxios2)
    window.location.href='./';
    await message.success('Borrado con Éxito');
  }

  const cancel = () => {
    console.log('Cancelado con Éxito');
  }



  const prefixSelector=(
    <Item id="campoInput" name='selectCodigo' noStyle>
      <Select style={{width: 80}} defaultValue='+54' disabled>
        <Option value='+52'>+52</Option>
        <Option value='+53'>+53</Option>
        <Option value='+54'>+54</Option>
        <Option value='+55'>+55</Option>
        <Option value='+56'>+56</Option>
      </Select>
    </Item>
  );

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
      <Row>

        <Col xs={1} sm={2} md={6} lg={7}></Col>

        <Col xs={22} sm={20} md={12} lg={10}>

          <Form name='formulario' onFinish={formSuccess}onFinishFailed={formFailed}ref={formRef}{...formItemLayout}>
            <Title style={{color:'black',textAlign:'center', textSizeAdjust:'auto'}}>Datos de Usuario</Title>
            
            <Item  label='Nombre' name='firstName'  ><Input  defaultValue={cookies.get('firstName')} /></Item>
            <Item label='Apellido' name='lastName' ><Input  defaultValue={cookies.get('lastName')} /></Item>
            <Item label='Usuario' name='usserName' ><Input  defaultValue={cookies.get('usserName')} /></Item>
            <Item label='Contraseña' name='password' ><Password  defaultValue={cookies.get('password')} /></Item>
            <Item label='Correo' name='email' ><Input  defaultValue={cookies.get('email')} /></Item>
            <Item label='Número de Teléfono' name='phone' ><Input  addonBefore={prefixSelector} style={{width: '100%'}} maxLength={10} defaultValue={cookies.get('phone')} /></Item>

            <Item style={{textAlign: 'center'}}>
              <Button htmlType='submit' onClick={activarGrabado}>Aceptar Cambios</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button id="ocultar" type='primary' htmlType='submit' icon={<SaveFilled/>} disabled>Grabar</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {/*<button id="ocultar" type='primary' htmlType='submit' icon={<SaveFilled/>} disabled>Borrar Usuario</button>*/}
              <button>
                <Popconfirm title="Estas seguro de borrar el Usuario？" onConfirm={confirm} onCancel={cancel} okText="Si" cancelText="Cancelar">
                  <a href="#">Borrar Usuario</a>
                </Popconfirm>
              </button>
              

            </Item>

          </Form>

        </Col>

        <Col xs={1} sm={2} md={6} lg={7}></Col>

      </Row>
    </div>
  );
  
}

export default grabar;