import PublicList from '../Publications/PublicList';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

const  PublicPage = ()=>{

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

  console.log('publicaciones', publications)

  return (
    <div>
      <h1>Posteos</h1>

      <div>
        
          <PublicList data={publications}/>
        
      </div>
    </div>
    

  )
}

export default PublicPage;