import React, { useState } from "react"
import Item from './Item'
import StageName from "./StageName"
import {data} from './data'

export default function Stage (props) {
    const [ isDone, setIsDone] = useState(false)
    const [ isAllDone, setIsAllDone] = useState(false)


    /* 
    1. vyřešit infinite loop
    2. přidat funkci pro všechny items
    3. vyřešit, jak zjistit jestli jsou hotový items pro konkrétní stage (pomocí ids? něco jako "currentStage +-1")
    4. conditional rendering - vyrenderovat "Done" a checkmark a změnit "disabled" property 
    */


    let notDoneItems = []

    const areItemsDone = (item) => {
        notDoneItems = Object.values(item).filter(status => !status)
        if (notDoneItems.length === 0) {
            //setIsDone (jenže teď mi to dá infinite loop)
        }
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


