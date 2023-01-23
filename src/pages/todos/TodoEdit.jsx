import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodoDetailsService, editTodoService } from '../../services/todo.services'


function TodoEdit() {


  const navigate = useNavigate()
  const {id} = useParams()


  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")
  const [ isUrgent, setIsUrgent ] = useState(false)


  const handleTitleChange = (event) => setTitle(event.target.value)
  const handleDescriptionChange = (event) => setDescription(event.target.value)
  const handleIsUrgentChange = (event) => setIsUrgent(event.target.checked)


  useEffect(() => {
    getTodoDetails()
  }, [])


  const getTodoDetails = async () => {

    try {

      const response = await getTodoDetailsService(id)
      console.log(response.data)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setIsUrgent(response.data.isUrgent)

    } catch (error) {
      navigate("/error")
    }
  }

  const handleEdit = async () => {

    const todoObj = {
      title: title,
      description: description,
      isUrgent: isUrgent,
    }

    try {

      await editTodoService(id,todoObj)
      navigate("/todos")
      
    } catch (error) {
      navigate("/error")
    }
  }


  return (
    <div>

      <h4>Edit Form</h4>

      <label htmlFor="title">Title</label>
      <input type="text" name='title' onChange={handleTitleChange}  value={title} />
      <br />
      <label htmlFor="description">Description</label>
      <input type="text" name='description' onChange={handleDescriptionChange} value={description}  />
      <br />
      <label htmlFor="isUrgent">Is Urgent</label>
      <input type="checkbox" name='isUrgent' onChange={handleIsUrgentChange} checked={isUrgent} />
      <br />
      <button onClick={handleEdit}>Edit</button>

    </div>
  )
}

export default TodoEdit