import {useState} from 'react'
function Counter()
{

    const [value,setValue] = useState(0)

    function incre()
    {
        setValue(value+1)
    }

    return(
        <div>
            <h1>Count : {value} </h1>
            <button onClick={incre}>Increment </button>
        </div>

    )
}
export default Counter