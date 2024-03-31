import React, { useReducer, useState } from 'react'

const State2 = () => {
    // const [counter, setCounter] = useState(0);



    // const [show, setShow] = useState(true);

    // const increase = () => {
    //     setCounter(counter + 1);
    //     setShow(!show)

    // }


    //initial value of state in form of object
    const initialvalue = {
        count: 0,
        show: true
    }
    //reducer function with state and action to be done on state
    const reducer = (state, action) => {
        switch (action.type) {
            case "INCREMENT":
                return {
                    count: state.count + 1,
                    show: state.show
                }
            case "TOGGLE":
                return {
                    count: state.count,
                    show: !state.show
                }
            default:
                return state;
        }
    }
    // const [state to be changed, dispatch function to change the state] =  useReducer(reducer function to write down state change logic, initial value of state)
    const [state, dispatch] = useReducer(reducer, initialvalue);


    return (
        <>
            <div>
                UseReducer
            </div>
            <div>Example 1</div>
            <div>
                <h1>{state.count}</h1>
                <button onClick={() => {
                    dispatch({ type: "INCREMENT" })
                    dispatch({ type: "TOGGLE" })
                }
                }>Increase</button>
            </div>
            {
                state.show && (
                    <div>This is even</div>
                )
            }

        </>
    )
}

export default State2