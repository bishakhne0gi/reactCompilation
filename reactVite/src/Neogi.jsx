
const userName = "Neogi"

function Neogi() {
    return (
        <>
            <h1>Its {userName}</h1>

            {/* Not possible as it cannot be evaluated */}
            {/* <h1>Its {if(userName) === 'Neogi'?"Yes":"No"}</h1> */}
        </>
    )
}

export default Neogi