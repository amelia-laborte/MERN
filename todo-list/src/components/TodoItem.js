const TodoItem = (props) => {
   const {deleteTodo, handleOnChange, todoObj, index} = props 

  return (
    <li
      style={{ textDecoration: todoObj.completed ? "line-through" : "none" }}
      key={index}
    >
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

export default TodoItem;
