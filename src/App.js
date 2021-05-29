import './App.css';
import React from 'react';
import 'antd/dist/antd.css';
import DefaultLayout from './components/Layout/Layout.jsx';
import Login from './components/Login/Login.jsx';

function App() {
  return (
    <div>
      {/* <Login/> */}
      <DefaultLayout/>
    </div>
  )
}


// console.log({Login}.Form)

export default App;