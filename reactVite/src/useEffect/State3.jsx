import React, { useEffect, useState } from 'react'
import axios from 'axios'
const State3 = () => {

    const [data, setData] = useState("");
    const dataFetching = async () => {

        await axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((response) => {
                setData(response.data[0].email)
                console.log("UseEffect hit!!")
            })
            .catch((err) => {
                console.log(err)
            })

    }

    //useEffect (()=>{

    // },[depencency array])
    useEffect(() => {
        dataFetching();

    }, [])

    return (
        <>
            <div>Hello World! {data}</div>
        </>
    )
}

export default State3