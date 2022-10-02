import { useState } from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {

  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  return (
    <div className="App">
      <div className='app-container'>
        <div className='comp-container'>
          <Header />
        </div>
        <div className='comp-container'>
          <AddToDo
            input={input} 
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo={editTodo}
            setEditTodo={setEditTodo} />
        </div>
        <div className='comp-container'>
          <ToDoList
            todos={todos}
            setTodos={setTodos}
            setEditTodo={setEditTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
