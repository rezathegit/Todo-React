import React from 'react';

const TodoForm = (
  {
    todoInput,
    setTodoInput,
    todos,
    setTodos,
    setInputError,
  },
) => {
  const todoHandler = e => {
    setTodoInput(e.target.value);
  };

  const submitTodoHandler = e => {
    e.preventDefault();
    if (todoInput) {
      setTodos([
        ...todos,
        { text: todoInput, isDone: false, id: Date.now() },
      ]);
      setTodoInput('');
      setInputError('');
    } else {
      setInputError('Please provide a todo task!');
    }
  };

  return (
    <form>
      <input value={todoInput} onChange={todoHandler} type="text" className="todo-input" placeholder="What to do?" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <span className="material-icons-outlined">add</span>
      </button>
    </form>
  );
};

export default TodoForm;
