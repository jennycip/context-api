import React, { useContext, useState, useEffect } from "react";
import AddNewTodo from './AddNewTodo'
import { ThemeContext } from '../context/ThemeContext'
import { TodoListContext } from '../context/TodoListContext'

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const { isDarkTheme, lightTheme, darkTheme, changeTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const { todos, dispatch } = useContext(TodoListContext);

  const [count, setCount] = useState(0);

  const handleChange = (e) => {
    setTodo(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', text: todo });
  }

  const handleRemoveTodo = (e) => {
    const id = e.target.id;
    dispatch({ type: 'REMOVE_TODO', id });
  }



  return (
    <div style={{ background: theme.background, color: theme.text, textAlign: 'center' }}>
      {todos.length ? (
        todos.map((todo) => {
          return <p id={todo.id} onClick={handleRemoveTodo} className='item' key={todo.id}>{todo.text}</p>

        })
      ) : (
          <div>No values</div>
        )
      }
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="todo">To do</label>
        <input type="text" id='todo' value={todo} onChange={handleChange} />
        <input type="submit" />

      </form>
      <br /><br />
      <button className='ui button primary' onClick={changeTheme}>change the theme</button>
      <br /><br />
      <button className='ui button primary' onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default TodoList;
