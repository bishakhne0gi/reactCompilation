import React, { useState } from 'react'

const State1 = () => {

    //without hook
    // let counter = 0;

    // const increase = () => {
    //     counter += 1;
    //     console.log(counter);
    //     return counter;
    // }

    //Syntax: const [ state_name, setter function_name] = useState(initial_value)
    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);

    }



    const [name, setName] = useState('');

    // we need to use event object to get the value of input field
    const changeName = (event) => {
        const updatedName = event.target.value;
        setName(updatedName);
        console.log(name);
    }


    return (
        <>
            <div>
                UseState
            </div>
            <div>Example 1</div>
            <div>
                <h1>{counter}</h1>
                <button onClick={increase}>Increase</button>
            </div>
            <div>Example 2</div>
            <div>
                <input placeholder='Enter name'
                    onChange={changeName}
                />
            </div>
            <div>{name}</div>
            <div>Result</div>
        </>
    )
}

export default State1