import React from "react";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTodo, editTodo } from "./Todo";

function Task({ todo }) {
  console.log("todo2", todo);
  const Dispatch = useDispatch();

  const handleToggle = (id) => {
    Dispatch(toggleTodo(id));
  };

  const handleDelete = (id) => {
    Dispatch(deleteTask(id));
  };

  const handleEdit = (id) => {
    Dispatch(editTodo);
  };

  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <div
        style={{
          flex: "1",
          padding: ".3em",
          border: "1px solid black",
          marginRight: "1em",
        }}
      >
        <div className="d-flex justify-content-bentween align-items-center">
          {todo.description}
          <input
            style={{ width: "1.3em", height: "1.3em" }}
            type="checkbox"
            onClick={() => handleToggle(todo.id)}
            checked={todo.isDone}
          />
        </div>
      </div>
      <div className="d-flex" style={{ gap: "1em" }}>
        <Button variant="info" onClick={() => handleEdit(todo.id)}>
          {" "}
          Edit{" "}
        </Button>
        <Button variant="warning" onClick={() => handleDelete(todo.id)}>
          {" "}
          Delete{" "}
        </Button>
      </div>
    </div>
  );
}
export default Task
