import React, { useState } from "react";

const Todo = (props) => {

  const mapTodoArrToListItems = (inputText, id) =>
    
  <li key={id}>{inputText}</li>;

  const [todoArr, setTodoArr] = useState([]);

  const createTodo = (submitEvent) => {
    submitEvent.preventDefault();
    console.log(submitEvent);
    const inputText = document.getElementById("id").value;
    
    // setTodoItemText(inputText);
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
