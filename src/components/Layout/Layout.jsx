import React, { useState } from 'react'
import { Layout, Menu/*, Breadcrumb */} from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  /*FileOutlined,*/
  /*TeamOutlined,*/
  UserOutlined,
} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import CardsPage from '../CardsPage/CardsPage';
import {Routes, Route} from 'react-router-dom';
import Publications from '../Publications/Publications';
import Ussers from '../Ussers/Usser';
import Login from '../Login/Login';
import Registrar from '../Registrar/Registrar';


const { Header, Content, Footer, Sider } = Layout;

const DefaultLayout =() => {
  const [collapsed, setCollapsed] = useState(false)

  const handleOnCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed( collapsed );
  };

  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleOnCollapse}>
        <div className="logo" />
        <Menu theme="Dark" defaultSelectedKeys={['1']} mode="inline">
          {/* <Menu.Item key="1" icon={<PieChartOutlined />}>
          <NavLink to='/'>Home</NavLink>
          </Menu.Item> */}
          <Menu.Item key="2" icon={<UserOutlined />}>
          <NavLink to='/ussers'>Usuarios</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<DesktopOutlined />}>
            <NavLink to='/publications'>Publicaciones</NavLink>
          </Menu.Item>
          {/* <Menu.Item key="4" icon={<DesktopOutlined />}>
            <NavLink to='/login'>Login</NavLink>
          </Menu.Item> */}
          <Menu.Item key="5" icon={<DesktopOutlined />}>
            <NavLink to='/registrar'>Registrar</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              {/*<Route path='/login' element={<Login/>}/>*/}
              <Route path='/publications' element={<Publications/>}/>
              <Route path='/ussers' element={<Ussers/>}/>
              {/*<Route path='/login' element={<Login/>}/>*/}
              <Route path='/registrar' element={<Registrar/>}/>
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default DefaultLayout;