import React, { useCallback, useMemo, useState } from 'react'
import ShowIncrement from './ShowIncrement'
import { procesoPesado } from '../../helps/procesoPesado'

const CallBackHook = () => {
    const [counter, setCounter] = useState(10)
    console.log('Me rendericé');

    const increment = useCallback(
        (num) => {
            setCounter(counter => counter + num)
        },
        [setCounter],
    )

    return (
        <div>
            <h1>Usando UseCallBack: {counter}</h1>
            <ShowIncrement increment={increment} />
        </div>
    )
}

export default CallBackHook
