
import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");




  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "[]{}!@#$%^&*()-+=_"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }

    setPassword(pass)

  },
    [length, numberAllowed, charAllowed, setPassword]);


  useEffect(() => { passwordGenerator() }
    , [length, charAllowed, numberAllowed])



  const copyPassword = () => {
    window.navigator.clipboard.writeText(password)
    passRef.current?.select()
  }

  const passRef = useRef(null)

  return (
    <>
      <h1>
        Password Generator
      </h1>
      <div>
        <input
          type='text'
          value={password}
          placeholder='password'
          ref={passRef}
        />
        <button onClick={copyPassword}>Copy</button>

      </div>
      <div>
        <input
          type='range'
          min={6}
          max={100}
          value={length}
          onChange={(e) => { setLength(e.target.value) }

          }
        />
        <label htmlFor=''>Length for: {length}</label>
      </div>

      <div>
        <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => { setNumberAllowed((prev) => !prev) }}
        />
        <label>Numbers</label>
        <input
          type='checkbox'
          defaultChecked={charAllowed}
          id='charInput'
          onChange={() => { setCharAllowed((prev) => !prev) }}
        />
        <label>Character</label>
      </div>
    </>
  )
}

export default App
