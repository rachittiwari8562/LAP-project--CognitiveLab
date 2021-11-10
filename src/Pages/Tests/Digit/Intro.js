import React from 'react'
import SubHeaderNback from '../../../Components/SubHeaderNback'

import {digit_symbols} from "../../../constants"
var a = '\u25C9'
const Intro = ({goToDemo}) =>{
    return (
        <div  className="relative lg:w-3/4 h-4/5 mx-auto mb-5">
            <SubHeaderNback content="Overview of Procedure :"/>
            <div>
            <h5 className="text-2xl font-bold mt-10">Given below is the key table . Each symbol in the top box has a corresponding number in the bottom box .</h5>
            </div>
            <div className="grid grid-cols-9 gap-0 text-center my-10">
            {
            Object.keys(digit_symbols).map((item)=>(
                <h5 className="border-2 border-t-4 p-2 border-gray-600">{digit_symbols[item]}</h5>
            ))
            }
            {
            Object.keys(digit_symbols).map((item)=>(
                    <h5 className="border-2 border-b-4 p-2 border-gray-600">{item}</h5>
                ))
            }
            </div>
            <button 
                onClick={goToDemo}
                className="px-4 py-2 my-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                Start Practice
            </button>
        </div>
    )
}

export default Intro
