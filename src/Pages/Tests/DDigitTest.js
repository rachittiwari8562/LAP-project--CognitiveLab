import React, { Component,useState } from 'react'
import TestHeader from '../../Components/TestHeader'
import Intro from './Digit/Intro'

const DDigitTest = () => {

    const [selectedStage,selectStage] = useState("Intro")

    return (
        <div className="w-screen h-screen">
            <TestHeader test={{name:"Digit symbol substitution"}} selectedOption={selectedStage} selectOption={selectStage} />
            
            {selectedStage === "Intro" && <Intro goToDemo={()=>selectStage("Demo")}/>}
            {/* {selectedStage === "Demo"  && <Demo goToTask={()=>selectStage("Task")}/>}
            {selectedStage === "Task"  && <Test exit={()=>selectStage("Exit")}/>} */}
    </div>
    )
}

export default DDigitTest