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

12. useCallback
13. useEffect
14. useRef
