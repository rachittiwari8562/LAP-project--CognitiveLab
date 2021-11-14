import React from 'react'
import DigitKeysTable from '../../../Components/DigitKeysTable'
import SubHeaderNback from '../../../Components/SubHeaderNback'

const Intro = ({goToDemo}) =>{
    return (
        <div  className="relative lg:w-3/4 h-4/5 mx-auto mb-5">
            <SubHeaderNback content="Overview of Procedure :"/>
            <div>
            <h5 className="text-2xl font-bold my-10">Given below is the key table . Each symbol in the top box has a corresponding number in the bottom box .</h5>
            </div>
            <DigitKeysTable/>
            <button 
                onClick={goToDemo}
                className="absolute bottom-0 right-0 px-4 py-2 my-10 rounded-md text-2xl font-bold border-4 border-green-700 text-green-900 hover:bg-green-700 hover:text-white">
                Start Practice
            </button>
        </div>
    )
}

export default Intro
