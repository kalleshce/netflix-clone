import { DisabledByDefault } from '@mui/icons-material';
import { Box, Button, FormHelperText, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import uniqid from 'uniqid';

const AddToDo = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {

  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo);
    setEditTodo('')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uniqid(), title: input, completed: false }]);
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div style={{width:'400px', display:'flex', justifyContent:'space-around'}}>
        <Box >
          <TextField id="outlined-basic" color='success' placeholder='Add a Todo'
            onChange={handleInputChange} variant="outlined" size='small' value={input} />
        </Box>
          <Button sx={{px:'30px'}} disabled={input.length > 0 ? false : true} color='success' variant='contained' size='large' onClick={handleSubmit}> Add</Button>
        </div>
      </div>
    </form>
  )
}

export default AddToDo;