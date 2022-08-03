import React, { useState } from "react";

const Todo = (props) => {
  const [todoArr, setTodoArr] = useState([]);

  const handleOnChange = (e, index) => {
    console.log("handleOnChange")
    const checked = e.target.checked;
    const updatedTodos  = [...todoArr]
    const todo = updatedTodos[index]
    todo.completed = checked
    setTodoArr(updatedTodos)
  };

  const deleteTodo = (index) => {
    const firstPart = todoArr.slice(0, index);
    const secondPart = todoArr.slice(index + 1);
    setTodoArr([...firstPart, ...secondPart]);
  };

  const mapTodoArrToListItems = (todoObj, index) => {
    return (
      <li key={index}>
        <input
          type="checkbox"
          checked={todoObj.completed}
          onChange={(e) => handleOnChange(e, index)}
        ></input>
        {todoObj.text}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    );
  };

  const createTodo = (submitEvent) => {
    submitEvent.preventDefault();
    const inputText = document.getElementById("id").value;
    const newTodo = { text: inputText, completed: false };
    setTodoArr([newTodo, ...todoArr]);
  };

  return (
    <div>
      <h1>Things I need to do:</h1>
      <form onSubmit={createTodo}>
        <input type="text" name="todoItemText" id="id"></input>
        <button type="submit">Add this to my list...</button>
      </form>
      <h2>My Todo List</h2>
      {todoArr.map(mapTodoArrToListItems)}
    </div>
  );
};

export default Todo;
