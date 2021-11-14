import React from 'react'
import {digit_symbols} from "../constants"

const DigitKeysTable = () =>{
    return (
        <div className="grid grid-cols-9 gap-0 text-center mx-10 border-t-4 border-r-4 border-gray-600">
        {
        Object.keys(digit_symbols).map((item)=>(
            <h5 className="border-b-4 border-l-4 p-2 border-gray-600 text-xl font-bold">{digit_symbols[item]}</h5>
        ))
        }
        {
        Object.keys(digit_symbols).map((item)=>(
                <h5 className="border-b-4 border-l-4 p-2 border-gray-600 text-xl font-bold">{item}</h5>
            ))
        }
        </div>
    )
}

export default DigitKeysTable
