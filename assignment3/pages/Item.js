import React, { useState } from 'react'

export default function Item (props) {
    const [isDone, setIsDone] = useState(false)

    return (
        <div>
            <input
            type="checkbox"
            id={props.item}
            name={props.item}
            checked={isDone}
            onClick={() => setIsDone(!isDone)}
            />
            <label htmlFor={props.item}>{props.item}</label>
        </div>
    )
}