/* import axios from 'axios' */
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addTodoService } from '../services/todo.services'


function AddForm(props) {

  const navigate = useNavigate()

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ isUrgent, setIsUrgent ] = useState(false)

  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleDescriptionChange = (event) => setDescription(event.target.value)
  const handleIsUrgentChange = (event) => setIsUrgent(event.target.checked)

  const handleSubmit = async () => {
    
    try {

      const newTodo = {
        title: title,
        description: description,
        isUrgent: isUrgent,
      }

      /* await axios.post("http://localhost:5005/api/todos", newTodo) */
      await addTodoService(newTodo)

      props.getTodos(

      )
    } catch (error) {
      navigate("/error")
    }
  }

  return (
    <div>

      {/* <form> */}

        <label htmlFor="title">Title</label>
        <input type="text" name='title' onChange={handleTitleChange} value={title} />
        <br />
        <label htmlFor="description">Description</label>
        <input type="text" name='description' onChange={handleDescriptionChange} value={description} />
        <br />
        <label htmlFor="isUrgent">Is Urgent</label>
        <input type="checkbox" name='isUrgent' onChange={handleIsUrgentChange} checked={isUrgent} />
        <br />
        <button onClick={handleSubmit}>Add</button>

      {/* </form> */}

    </div>
  )
}

export default AddForm