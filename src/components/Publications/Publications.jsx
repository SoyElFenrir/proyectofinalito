import React, {useEffect, useState} from 'react'
import {Table} from 'antd'
import axios from 'axios'
import {DeleteTwoTone, EditTwoTone} from '@ant-design/icons'

const Publications = () => {

  const [publications, setPublications] = useState([])

  const getAllPublications = async () => {
    const response = await axios.get(`http://localhost:8085/api/publications/`)
    console.log(response)

    setPublications(response.data)
  }

  useEffect(() => {
    getAllPublications()
  }, []
  )
  
  const handleOnDelete = (event) => {
    console.log('handleOnDelete',event)
  };

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Subtitle',
      dataIndex: 'subtitle',
      key: 'subtitle',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      key: 'author',
    },
    {
      title: 'Genre',
      dataIndex: 'genre',
      key: 'genre',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Comment',
      dataIndex: 'comment',
      key: 'comment',
    },
    {
      title: 'Delete',
      dataIndex: '',
      key: 'd',
      render: (text, row) => <DeleteTwoTone onClick={handleOnDelete(row)}/>
    },
    {
      title: 'Edit',
      dataIndex: '',
      key: 'e',
      render: () => <EditTwoTone onClick={(record) => console.log('record', record)}/>
    }
  ];

  return (
    <div>
      <h1>Publicaciones</h1>
      <Table dataSource={publications} columns={columns} rowKey='_id'/>
    </div>
  )

}

export default Publications