import axios from "axios";

const service = axios.create({
    baseURL: "http://localhost:5005/api"
})

//* Servicio GET para obtener todos los Todos.
const getTodosService = () => {
    return service.get("/todos")
}

//* Servicio GET para obtener los detalles DINAMICOS de un Todo.
const getTodoDetailsService = (id) => {
    return service.get(`/todos/${id}`)
}

//* Servicio POST para el crear un Todo.
const addTodoService = (newTodo) => {
    return service.post("/todos", newTodo)
}

//* Servicio DELETE para eliminar un Todo.
const deleteTodoService = (id) => {
    return service.delete(`/todos/${id}`)
}

//* Servicio PATCH para editar un Todo.
const editTodoService = (id, updateTodo) => {
    return service.patch(`/todos/${id}`, updateTodo)
}


export {
    getTodosService,
    getTodoDetailsService,
    addTodoService,
    deleteTodoService,
    editTodoService
}