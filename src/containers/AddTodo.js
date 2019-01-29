import React from "react";
import { connect } from "react-redux";
import { setTodo } from "../actions";
import { mergeWith } from "../lib";

const AddTodo = ({ setTodo }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) return;
          setTodo(todos => [
            ...todos,
            {
              text: input.value,
              completed: false
            }
          ]);
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  setTodo: updater => dispatch(setTodo(updater))
});
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
