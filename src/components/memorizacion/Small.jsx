import React, { memo } from 'react'

const Small = memo(({ value }) => {
    console.log('Me volví a renderizar');
    return (
        <small>{value}</small>
    )
})

export default Small