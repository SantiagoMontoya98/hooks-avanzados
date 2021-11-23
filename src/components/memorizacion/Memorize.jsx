import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/UseCounter'
import Small from './Small'

const Memorize = () => {

    const { counter, handleSumar } = useCounter()
    const [show, setShow] = useState(true)
    console.log('Me rendericé');
    return (
        <div>
            <h1>Contador: {<Small value={counter} />}</h1>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
    )
}

export default Memorize
