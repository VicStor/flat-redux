import { setTodo, setVisibilityFilter } from "./index";
import { set } from "../lib";

describe("todo actions", () => {
  const todos = [
    {
      text: "Run the tests",
      completed: false,
      id: 0
    },
    {
      text: "Use Redux",
      completed: false,
      id: 1
    }
  ];
  const sampleTodo = {
    id: 10,
    text: "Simplify Redux",
    completed: false
  };
  it("setTodo should append new Todo", () => {
    const addTodo = setTodo(todos => [...todos, sampleTodo]);
    expect(addTodo.updater(todos)).toEqual([...todos, sampleTodo]);
  });

  it("setTodo should toggle 'completed' property", () => {
    const toggleTodo = setTodo(set([0, "completed"], completed => !completed));
    expect(toggleTodo.updater([sampleTodo])).toEqual([
      {
        id: 10,
        text: "Simplify Redux",
        completed: true
      }
    ]);
  });
  it("setVisibilityFilter should create SET_VISIBILITY_FILTER action", () => {
    expect(setVisibilityFilter("active")).toEqual({
      type: "SET_VISIBILITY_FILTER",
      filter: "active"
    });
  });
});
