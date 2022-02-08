import React, { useEffect, useState } from 'react';

const Todo = (
  {
    text,
    todo,
    todos,
    setTodos,
  },
) => {
  const deleteTodoHandler = () => {
    setTodos(todos.filter(element => element.id !== todo.id));
  };

  const isDoneHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item, isDone: !item.isDone,
        };
      }
      return item;
    }));
  };

  const [deleteButtonVisible, setDeleteButtonVisible] = useState('none');
  const [orderInTheList, setOrderInTheList] = useState('none');

  useEffect(() => {
    // eslint-disable-next-line
    todo.isDone ? setDeleteButtonVisible('block') : setDeleteButtonVisible('none');
    // eslint-disable-next-line
    todo.isDone ? setOrderInTheList(1) : setOrderInTheList(0);
  });

  return (
    <div className="todo" style={{ order: orderInTheList }}>
      <li className={`todo-item ${todo.isDone ? 'completed' : ''}`}>{text}</li>
      <button type="button" onClick={isDoneHandler} className="done-btn">
        <span className="material-icons-outlined">check</span>
      </button>
      <button type="button" onClick={deleteTodoHandler} className="delete-btn" style={{ display: deleteButtonVisible }}>
        <span className="material-icons-outlined">clear</span>
      </button>

    </div>
  );
};

export default Todo;
