import CardList from '../CardLists/CardList';
import Form from '../Forms/Form';
import React, {useState} from 'react';
//import {Table} from 'antd';

//const person = {nombre: 'sergio', apellido: 'aguirre'}

//const columns1 = [{title: 'Nombre', dataIndex: 'nombre', key: 'nombre'}, {title: 'Apellido', dataIndex: 'apellido', key: 'apellido'}]

function CardsPage() {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData])
  }

  return (
    <div>
      <div className="header">GitHub Card App</div>
      <Form onSubmit={addNewProfile}/>
      <CardList data={profiles}/>
    </div>
  )

  /*return (
    <div>
      <div className="header">GitHub Card App</div>
      <Form onSubmit={addNewProfile}/>
      <CardList data={profiles}/>
      <Table datasource = {person} columns = {columns1}/>
    </div>
  )*/
}

export default CardsPage;