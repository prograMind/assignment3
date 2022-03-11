import React, { useState } from "react"
import Item from './Item'
import StageName from "./StageName"
import {data} from './data'

export default function Stage (props) {
    const [ isDone, setIsDone] = useState(false)
    const [ isAllDone, setIsAllDone] = useState(false)

    // const isAllCompleted = true;

    /* kdyz (jsou vsechny itemy isDone) {
        změň isAllDone na true a vyrenderuj "done"
    }
    */

    // if (isAllCompleted) {
    //    setIsAllDone(true)
    // }
    

    return (
        <>
        {data.map((stage) => {
            return (
                    <StageName name={stage.step}>
                    {stage.tasks.map((t)=> {
                        return (              
                        <Item item={t.task} status={t.completed}/>
                )
            })}
            </StageName>
        )}
    )}
    </>
    )
}


