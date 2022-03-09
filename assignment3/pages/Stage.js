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
            stage.tasks.map((t)=> {
                return (
                    <div>                
                        <StageName name={stage.step} />
                        <Item item={t.task}/>
                    </div>
                )
            })
        )}
    )
    }
    </>
    )
}

//DÚ: jak zobrazit jen předměty k daný stagei
//mapa mi jede 3x, proto se mi propisujou tasky všude

