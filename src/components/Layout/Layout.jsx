import React, { Component } from 'react'
import { Layout, Menu/*, Breadcrumb */} from 'antd';
import {
  PicRightOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import Publications from '../Publications/Publications';
import Login from '../Login/Login';
import Registrar from '../Registrar/Registrar';
import Cookies from 'universal-cookie';
import { Avatar } from 'antd';
import Perfil from '../Perfil/Perfil';
import PublicSelect from '../Publications/PublicSelect';

const { Header, Content, Footer, Sider} = Layout;

const cookies = new Cookies();

class Menu1 extends Component {

    cerrarSesion=()=>{
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
      
      window.location.href='./';
    }

    capturarUsuario=()=>{
      alert(`El usuario actual es: ${cookies.get('usserName')} con el id: ${cookies.get('id')}`)
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('firstName: '+cookies.get('firstName'));
        console.log('lastName: '+cookies.get('lastName'));
        console.log('usserName: '+cookies.get('usserName'));
        console.log('password: '+cookies.get('password'));
        console.log('email: '+cookies.get('email'));
        console.log('address: '+cookies.get('address'));
        console.log('phone: '+cookies.get('phone'));
        
        function validarLogin(){
          let var_id = cookies.get('id')
          console.log('El id del layout es: ', var_id)
          
          return (var_id === undefined) ? false : true
        }

        return (
          
          <Layout theme="Dark" style={{ minHeight: '100vh' }}>
          
          {validarLogin() && 
            <Sider>
              <div className="logo" />

              <>
              {validarLogin() &&
                <div style={{textAlign: 'center'}}>
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />}/>
                  <h1><NavLink to='/perfil' style={{color: 'white'}}>Ver Perfil</NavLink></h1>
                </div>
              }  
              </>,

              <Menu theme="Green" defaultSelectedKeys={['1']} mode="inline">
                
                {
                  validarLogin() && <Menu.Item key="1" icon={<PicRightOutlined />}><NavLink to='/publications'>Publicaciones</NavLink></Menu.Item>
                }
                
              </Menu>
            </Sider>}

            <Layout className="site-layout">
            
              <Header className="site-layout-background" style={{ padding: 0}}><h1 style={{color:'white','font-size':'40px'}}>PosteosFull.com</h1></Header>
              
              <Content style={{ margin: '0 16px' }}>
              
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  <Routes>
                    <Route path='/publications' element={<Publications/>}/>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/registrar' element={<Registrar/>}/>
                    <Route path='/perfil' element={<Perfil/>}/>
                    <Route path='/publicSelect' element={<PublicSelect/>}/>
                  </Routes>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                <div>
                  
                  <br />
                  {
                    validarLogin() && <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                  }
                  
                </div>
              </Footer>
            </Layout>
          </Layout>
        );
    }
}

export default Menu1;