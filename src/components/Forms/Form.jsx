import './Form.css'
import React, { useState } from 'react'
import axios from 'axios'

const Form = (props) => {
  const [userName, setUserName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp.data)
    console.log('userName: ', userName)
  }

  const handleOnChange = (data) => {
    console.log(data.target.value)
    setUserName(data.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="GitHub username"
        value={userName}
        onChange={handleOnChange}
        required
      />
      <button>Add Card</button>
    </form>
  )
}

export default Form