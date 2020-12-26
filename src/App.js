import React, { useState, useEffect } from 'react';
import axios from 'axios'

// assets
import LogoIcon from './assets/images/logo.png'

// components
import Button from './components/Button';

export default function App() {
  const [count, setCount] = useState(1);
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    async function fetchTodo() {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      setTodos(data)
    }

    fetchTodo();
  }, [])
  
  return (
    <div>
      <h3>test import scss</h3>
      <h1>test scss</h1>
      <h3>test static file</h3>
      <img src={LogoIcon} alt="Logo" width="50px" />
      <h3>Test axios fetch data todo</h3>
      {todos && <>{todos.title}</>}
      <br/>
      <br/>
      <Button text="Increment" />
    </div>
  )
};

