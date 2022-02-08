import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [inputError, setInputError] = useState('');

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
        <span className="material-icons-outlined">face</span>
      </header>
      <TodoForm
        todos={todos}
        setTodos={setTodos}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        setInputError={setInputError} />
      <p className="input-error">{inputError}</p>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
