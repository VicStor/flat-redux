const todos = (todos = [], action) =>
  action.type === "SET_TODO" ? action.updater(todos) : todos;

export default todos;
