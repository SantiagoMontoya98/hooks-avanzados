import React, { useMemo, useState } from 'react'
import { Button } from 'react-bootstrap'
import useCounter from '../../hooks/UseCounter'
import { procesoPesado } from '../../helps/procesoPesado'
import Small from './Small'

const MemorizeHook = () => {

    const { counter, handleSumar } = useCounter()
    const [show, setShow] = useState(true)
    console.log('Me rendericé');

    const proceso = useMemo(() => procesoPesado(500), [counter])

    return (
        <div>
            <h1>Contador: <small>{counter}</small></h1>
            <p>{proceso}</p>
            <Button onClick={handleSumar}>+1</Button>
            <Button onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</Button>
        </div>
    )
}

export default MemorizeHook
