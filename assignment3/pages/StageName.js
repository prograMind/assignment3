import React, { Children } from "react"

export default function StageName (props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.children}</p>
        </div>
    )
}