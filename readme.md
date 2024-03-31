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
   3. React finds a call to useState, but this time, since there’s already a Hook at the first position of the list of Hooks, it just changes the current Hook variable and returns the array with the current state, and the function to update it
12. useCallback
13. useEffect
14. useRef
