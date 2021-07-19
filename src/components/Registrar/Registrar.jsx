import React, {createRef} from 'react';
import { Form, Input, Button, Col, Row, Select } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/es';
import axios from 'axios';
import { message } from 'antd';

const baseUrl="http://localhost:8085/api/ussers/";

const {Item} = Form;
const {Password} = Input;
const {Option} = Select;
const {Title} = Typography;

function Registrar(){
 
  const formRef=createRef();

  const formSuccess = async (datos)=>{
    console.log('Formulario enviado exitosamente: ',datos);
    await axios({
      method: 'post', 
      url: baseUrl,
      data: {
        "firstName":datos.firstName,
        "lastName":datos.lastName,
        "usserName":datos.usserName,
        "password":datos.password,
        "email":datos.email,
        "phone":datos.phone
      }
    })
    window.location.href='./';
    message.success('Registrado con Éxito');
  }

  const formFailed=(error)=>{
    console.log('Error: ',error)
  }

  const prefixSelector=(
    <Item name='selectCodigo' noStyle>
      <Select style={{width: 80}} defaultValue='54'>
        <Option value='+52'>+52</Option>
        <Option value='+53'>+53</Option>
        <Option value='+54'>+54</Option>
        <Option value='+55'>+55</Option>
        <Option value='+56'>+56</Option>
      </Select>
    </Item>
  );

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
      <Row>

        <Col xs={1} sm={2} md={6} lg={7}></Col>

        <Col xs={22} sm={20} md={12} lg={10}>

          <Form name='formulario' initialValues={{recordar: true}}onFinish={formSuccess}onFinishFailed={formFailed}ref={formRef}{...formItemLayout}>
            <Title style={{color:'black',textAlign:'center', textSizeAdjust:'auto'}}>Complete los siguientes datos para la Registración</Title>
            
            <Item label='Nombre' name='firstName' rules={[{required: true, message: 'Por favor ingrese el Nombre'}]}><Input/></Item>
            <Item label='Apellido' name='lastName' rules={[{required: true, message: 'Por favor ingrese el Apellido'}]}><Input/></Item>
            <Item label='Usuario' name='usserName' rules={[{required: true, message: 'Por favor ingrese el nombre de Usuario'}]}><Input/></Item>
            <Item label='Contraseña' name='password' rules={[{required: true, message: 'Por favor ingrese la Contraseña'}]}><Password/></Item>
            <Item label='Correo' name='email' rules={[{required: true, message: 'Por favor ingrese el Correo'}]}><Input/></Item>
            <Item label='Número de Teléfono' name='phone'><Input addonBefore={prefixSelector} style={{width: '100%'}} maxLength={10}/></Item>

            <Item style={{textAlign: 'center'}}>
              <Button type='primary' htmlType='submit'>Registrar Usuario</Button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button htmlType='submit' onClick={borrarCampos}>Borrar Campos</Button>
            </Item>
          </Form>

        </Col>

        <Col xs={1} sm={2} md={6} lg={7}></Col>

      </Row>
    </div>
  );
  
}

export default Registrar;