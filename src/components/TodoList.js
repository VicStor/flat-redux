import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { set } from "../lib";

const TodoList = ({ todos, setTodo }) => (
  <ul>
    {todos.map((todo, idx) => (
      <Todo
        key={todo.text}
        {...todo}
        onClick={() =>
          setTodo(set([idx, "completed"], completed => !completed))
        }
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  setTodo: PropTypes.func.isRequired
};

export default TodoList;
