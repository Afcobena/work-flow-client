import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import TodoList from "./pages/todos/TodoList"
import TodoDetails from "./pages/todos/TodoDetails"
import TodoEdit from "./pages/todos/TodoEdit"
import Error from "./pages/Error"
import NotFound from "./pages/NotFound"
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';




function App() {
  return (
    <div className="App">

      <Navbar />

      <Routes>

        <Route path="/" element={ <Home/> } />
        <Route path="/todos" element={ <TodoList/> }  />
        <Route path="/todos/:id/details" element={ <TodoDetails/> }  />
        <Route path="/todos/:id/edit" element={ <TodoEdit/> }  />
        <Route path="/signup" element={ <SignUp/> }  />
        <Route path="/login" element={ <Login/> }  />

        {/*Componentes para error handling */}

        <Route path="/error" element={ <Error/> }  />
        <Route path="/*" element={ <NotFound/> }  />

      </Routes>

    </div>
  );
}

export default App;
