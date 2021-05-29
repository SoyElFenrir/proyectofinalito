import React, {useEffect, useState} from 'react'
import {Table} from 'antd'
import axios from 'axios'

const Ussers = () => {

  const [ussers, setUssers] = useState([])

  const getAllUssers = async () => {
    const response = await axios.get(`http://localhost:8085/api/ussers/`)
    console.log(response)

    setUssers(response.data)
  }

  useEffect(() => {
    getAllUssers()
  }, []
  )
  
  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'LastName',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'UsserName',
      dataIndex: 'usserName',
      key: 'usserName',
    },
    {
      title: 'Password',
      dataIndex: 'password',
      key: 'password',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    }
  ];

  return (
    <div>
      <h1>Ussers</h1>
      <Table dataSource={ussers} columns={columns} rowKey='_id'/>
    </div>
  )

}

export default Ussers