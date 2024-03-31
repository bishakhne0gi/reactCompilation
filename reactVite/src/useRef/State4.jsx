import React, { useRef } from 'react'

const State4 = () => {

    //useRef(initialValue)
    const inputRef = useRef(null);

    const changeName = () => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
        inputRef.current.value = "";

    }
    return (
        <>
            <h1>UseRef</h1>
            <input type="text" placeholder='Example' ref={inputRef} />
            <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default State4