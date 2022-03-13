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
    let notDoneItems = []

    const areItemsDone = (item) => {
        notDoneItems = Object.values(item).filter(status => !status)
    }

    console.log(notDoneItems)

    return (
        <>
        {data.map((stage) => {
            return (
                    <StageName
                    key={stage.id}
                    name={stage.step}>
                    {stage.tasks.map((t)=> {
                        areItemsDone(t) 
                        return (             
                        <Item 
                        key={t.id} 
                        item={t.task} 
                        status={t.checked}/>
                )
            })}
            </StageName>
        )}
    )}
    </>
    )
}


