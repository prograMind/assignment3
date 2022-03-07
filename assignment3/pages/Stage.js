import React, { useState } from "react"

export default function Stage (props) {
    const [ isDone, setIsDone] = useState(false)

    

    return (
        <h2>{props.name}</h2>
    )
}