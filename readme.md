1. npm vs npx
node package manager vs node package executer

2. CRA vs package bundlers(VITE/)

3. react is a library
next is a framerwork

4. library vs framework
(cool kid vs military)

5. webDOM vs virtualDOM/ReactDOM

6. customReact Rendering Function

7. react architecture

8. reconciliation

9. fibre

10. props

## Hooks

Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns. By following this rule, you ensure that Hooks are called in the same order each time a component renders.

11. useState

   the useState is a Hook that allows you to add state to your functional component. It returns an array with two values: the current state and a setter function for updating the state.

   1. React determines it needs to re-render the component
   2. React resets the current Hook variable and calls your component
   3. React finds a call to useState, but this time, since there’s already a Hook at the first position of the list of Hooks, it just changes the current Hook variable and returns the array with the current state, and the function to update it.

Yes

12. useReducer
<https://blog.logrocket.com/react-usereducer-hook-ultimate-guide/#:~:text=type%20is%20dispatched.-,useState%20vs.,you%20can%20do%20with%20useState%20>.
    An alternative to the useState Hook, useReducer helps you manage complex state logic in React applications.
    When combined with other Hooks like useContext, useReducer can be a good alternative to Redux, Recoil, or MobX.

    the useReducer function is tightly coupled to a specific reducer. We dispatch action objects to that reducer only, whereas in Redux, the dispatch function sends the action object to the store. At the time of dispatch, the components don’t need to know which reducer will process the action.

    3 building blocks of Redux:
        1. Store : An immutable object that holds the application’s state data
        2. Reducer: A function that returns some state data, triggered by an action type
        3. Action: An object that tells the reducer how to change the state. It must contain a type property and can contain an optional payload property

        4. In React, useReducer essentially accepts a reducer function that returns a single value:

            const [count, dispatch] = useReducer(reducer, initialState);
            The reducer function itself accepts two parameters and returns one value. The first parameter is the current state, and the second is the action. 

12. useEffect
<https://blog.logrocket.com/using-react-useeffect-hook-lifecycle-methods/>
    Component lifecycle and lifecycle methods
       1. Mounting phase with componentDidMount
       2. Updating phase with shouldComponentUpdate and componentDidUpdate
       3. Unmounting phase with componentWillUnmount
    Using useEffect to apply lifecycle methods in functional components
        1. Using componentDidMount in functional components with useEffect
        2. Using the componentDidUpdate with useEffect
        3. Using componentWillUnmount with useEffect

    Mounting phase with componentDidMount
This is the first stage of a React component’s lifecycle where the component is created and inserted into the DOM. In this lifecycle stage, we have the componentDidMount lifecycle method, and executes when our component mounts:

componentDidMount() {
  console.log("The component has mounted successfully!");
  this.setState({
    loaded: true
  })
}
componentDidMount allows us to use setState so we can easily set and modify our state in the lifecycle method. This lifecycle method executes API calls, make calls to remote endpoints, and retrieves data.

In this stage, the render method renders the component into the DOM and is the only method required.
13. useRef
<https://medium.com/@zahidbashirkhan/react-useref-use-cases-with-examples-d7680d48a6e1>
In React.js, useRef is a hook that allows you to create a mutable reference to an element or a value. Unlike the useState hook, updating a useRef does not trigger a re-render of the component. It's commonly used for accessing and managing DOM elements directly, storing persistent values, or working with values that should not trigger a re-render.
12. useCallback
