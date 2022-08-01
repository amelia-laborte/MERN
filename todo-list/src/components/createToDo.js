import React, { useState } from "react";

const Todo = (props) => {
  const [todoArr, setTodoArr] = useState([]);

  const deleteTodo = (index) => {
    console.log("deleteTodo");
    const firstPart = todoArr.slice(0, index);
    const secondPart = todoArr.slice(index + 1);
    setTodoArr([...firstPart, ...secondPart]);
  };

  const mapTodoArrToListItems = (inputText, index) => {
    return (
      <li key={index}>
        {inputText}
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </li>
    );
  };

  const createTodo = (submitEvent) => {
    submitEvent.preventDefault();
    const inputText = document.getElementById("id").value;
    setTodoArr([inputText, ...todoArr]);
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
