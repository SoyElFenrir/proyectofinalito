import React, {Component} from 'react';
import { Form, Input, Button, Col, Row } from 'antd';
import 'antd/dist/antd.css';
import axios from 'axios';
import Cookies from 'universal-cookie';
import {NavLink} from 'react-router-dom';
import './Login.css'

const {Item} = Form;
const {Password} = Input;
const cookies = new Cookies();
const baseUrl="http://localhost:8085/api/ussers/";

class Login extends Component{

  state={
    form:{
      usserName: '',
      password: ''
    }
  }

  handleChange=async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  iniciarSesion=async()=>{
    await axios.get(baseUrl, {params: {usserName:this.state.form.usserName, password:this.state.form.password}})
    .then(response=>{
      console.log(response.data)
      return response.data;
    })
    .then(response=>{
      if(response.length>0){
        var respuesta=response[0];
        cookies.set('id', respuesta._id, {path: '/'});
        cookies.set('firstName', respuesta.firstName, {path: '/'});
        cookies.set('lastName', respuesta.lastName, {path: '/'});
        cookies.set('usserName', respuesta.usserName, {path: '/'});
        cookies.set('password', respuesta.password, {path: '/'});
        cookies.set('email', respuesta.email, {path: '/'});
        /*cookies.set('sexo', respuesta.sexo, {path: '/'});
        cookies.set('dateNac', respuesta.dateNac, {path: '/'});*/
        cookies.set('address', respuesta.address, {path: '/'});
        cookies.set('phone', respuesta.phone, {path: '/'});
        alert(`Bienvenido ${respuesta.usserName}`)
        window.location.href='./publications';
      }
      else{
        alert('El usuario o la contraseña no son correctos');
      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  render(){
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

          <Col xs={1} sm={2} md={6} lg={7}><p></p></Col>

          <Col xs={22} sm={20} md={12} lg={10}>

            <Form name='formulario' {...formItemLayout}>
              <Item label='Usuario' name='usserName' rules={[{required: true, message: 'Por favor ingrese el nombre de Usuario'}]}><Input name="usserName" onChange={this.handleChange}/></Item>
              <Item label='Contraseña' name='password' rules={[{required: true, message: 'Por favor ingrese la Contraseña'}]}><Password name="password" onChange={this.handleChange}/></Item>
              <Item style={{textAlign: 'center'}}>
                <Button type='primary' htmlType='submit' onClick={()=> this.iniciarSesion()}>Iniciar Sesión</Button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type='primary' htmlType='submit'><NavLink to='/registrar'>Registrarse</NavLink></Button>
              </Item>
            </Form>

          </Col>

          <Col xs={1} sm={2} md={6} lg={7}></Col>

        </Row>
      </div>
    );
  } 
}

export default Login;