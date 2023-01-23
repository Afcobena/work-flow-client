/* import axios from 'axios' */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { deleteTodoService, getTodoDetailsService } from "../../services/todo.services"

function TodoDetails() {

  const navigate = useNavigate()

  const { id } = useParams()

  const [ singleTodo, setSingleTodo ] = useState()

  const [ isFetching, setIsFetching ] = useState(true)


  useEffect(() => {

    getSingleTodo()

  }, [])


  const getSingleTodo = async () => {

    try {
      /* const response = await axios.get(`http://localhost:5005/api/todos/${id}`) */
      const response = await getTodoDetailsService(id)
      console.log(response)
      setSingleTodo(response.data)
      setIsFetching(false)
      
    } catch (error) {
      navigate("/error")
    }
  }

  const handleDelete = async () => {

    try {

      await deleteTodoService(id)
      navigate("/todos")

    } catch (error) {
      navigate("/error")
      
    }
    
  }

  if (isFetching === true) {
    return <h3>...is Loading</h3>
  }



  return (
    <div>

      <h5>To-Dos Details</h5>

      <p>Title: {singleTodo.title}</p>
      <p>Description: {singleTodo.description}</p>
      <p>Is Urgent: {singleTodo.isUrgent === true ? "Yes Baby" : "Naaahh"}</p>

      <button onClick={handleDelete}>Delete</button>
      <Link to={`/todos/${singleTodo._id}/edit`}>

        <button>Edit</button>
      
      </Link>

    </div>
  )
}

export default TodoDetails