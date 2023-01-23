/* import axios from 'axios'; */
import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import AddForm from '../../components/AddForm'


import { getTodosService } from "../../services/todo.services"

function TodoList() {

  const navigate = useNavigate()

  const [ allTodos, setAllTodos ] = useState()

  const [ isFetching, setIsFetching ] =useState(true)

  



  useEffect(() => {

    getTodos()
  }, [])

  const getTodos = async () => {

    try {
      /* const response = await axios.get("http://localhost:5005/api/todos") */
      const response = await getTodosService()
      console.log(response.data)
      setAllTodos(response.data)
      setIsFetching(false)
      
    } catch (error) {
      // redirigir
      navigate("/error")
      
    }
  }

  if (isFetching === true) {
    return <h3>...is Loading</h3>
  }


  return (
    <div>

      <AddForm getTodos={getTodos} />

      <h3>To-Dos List</h3>

      {allTodos.map((eachTodo) => {
        return <p key={eachTodo._id}>
          <Link to={`/todos/${eachTodo._id}/details`}>{eachTodo.title}</Link>
        </p>
      })}

    </div>
  )
}

export default TodoList