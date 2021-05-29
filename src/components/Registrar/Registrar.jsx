import React, {createRef, useState} from 'react';
import { Form, Input, Button, Col, Row, Radio, DatePicker, Select } from 'antd';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import 'moment/locale/es';
import locale from 'antd/es/date-picker/locale/es_ES';

const {Item} = Form;
const {Password} = Input;
const {Group} = Radio;
const {Option} = Select;
const {Title} = Typography;

function Registrar(){

  const [value, setValue] =useState(1);
 
  const formRef=createRef();

  const formSuccess=(datos)=>{
    console.log('Formulario enviado exitosamente: ',datos);
  }
  
  const formFailed=(error)=>{
    console.log('Error: ',error)
  }

  const onChange=e=>{
    setValue(e.target.value)
  }

  const prefixSelector=(
    <Item name='selectCodigo' noStyle>
      <Select style={{width: 80}} defaultValue='54'>
        <Option value='52'>+52</Option>
        <Option value='53'>+53</Option>
        <Option value='54'>+54</Option>
        <Option value='55'>+55</Option>
        <Option value='56'>+56</Option>
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
            <Title style={{color:'slategrey',textAlign:'center', textSizeAdjust:'auto'}}>Complete los siguientes datos para la Registración</Title>
            
            <Item label='Nombre' name='nombre' rules={[{required: true, message: 'Por favor ingrese el Nombre'}]}><Input /*onChange={this.handleChange}*//></Item>
            <Item label='Apellido' name='apellido' rules={[{required: true, message: 'Por favor ingrese el Apellido'}]}><Input /*onChange={this.handleChange}*//></Item>
            <Item label='Usuario' name='username' rules={[{required: true, message: 'Por favor ingrese el nombre de Usuario'}]}><Input /*onChange={this.handleChange}*//></Item>
            <Item label='Contraseña' name='password' rules={[{required: true, message: 'Por favor ingrese la Contraseña'}]}><Password /*onChange={this.handleChange}*//></Item>
            <Item label='Correo' name='correo' rules={[{required: true, message: 'Por favor ingrese el Correo'}]}><Input /*onChange={this.handleChange}*//></Item>
            <Item label='Sexo' name='sexo' rules={[{required: true, message: 'Por favor ingrese el Correo'}]}>
              <Group onChange={onChange} value={value} name='radiobutton' defaultValue={1}>
                <Radio value={1}>Hombre</Radio>
                <Radio value={2}>Mujer</Radio>
              </Group>
            </Item>
            <Item label='Fecha de Nacimiento' name='fechaNacimiento' rules={[{required: true, message: 'Por favor ingrese la Fecha de Nacimiento'}]}><DatePicker style={{width: '100%'}} locale={locale}/></Item>
            <Item label='Número de Teléfono' name='numeroTelefono'><Input addonBefore={prefixSelector} style={{width: '100%'}} maxLength={10}/* onChange={this.handleChange}*//></Item>

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