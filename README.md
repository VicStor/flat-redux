# Flat Redux

## Simplify action creators

Any slice of state uses single action creator with `updater` function as argument
`updater` to be invoked in reducer with corresponding state slice
1 state - 1 action

```
export const setTodo = updater => ({
  type: "SET_THIS_STATE_SLICE",
  updater
});
```

## Simplify reducer

All reducers are of the same logic, and each slice of state bounded to sindle action type
reducers might be generated

```
const reducer = (stateSlice, action) => (
  action.type === "SET_THIS_STATE_SLICE"
  ? action.updater(stateSlice)
  : stateSlice;
)

```

## Simplify unit testing

As for reducer is generated, that means no need to test every single reducer. Tests to be made for action creators only

```
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
```

## Simplify action creator invocation

Logic of data update described in updater function so calling this function from Component or Middleware self-explanatory

```
  setTodo(todos => [
    ...todos,
    {
      text: input.value,
      completed: false
    }
  ]);
```

```
// use with set - update prop by lens provided, set curried, last argument is todos (omited in this example)
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
```

# Redux Todos Example

This project template was built with [Create React App](https://github.com/facebookincubator/create-react-app), which provides a simple way to start React projects with no build configuration needed.

Projects built with Create-React-App include support for ES6 syntax, as well as several unofficial / not-yet-final forms of Javascript syntax such as Class Properties and JSX. See the list of [language features and polyfills supported by Create-React-App](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#supported-language-features-and-polyfills) for more information.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
