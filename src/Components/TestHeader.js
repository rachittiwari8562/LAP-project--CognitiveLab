import React from 'react'
import Profile from './Profile'
import logo_black from "../Assets/Images/brain_black.png"
import back from "../Assets/Images/back.png"
import {Link} from "react-router-dom";

const items = {"Intro":"How To Play","Task":"Start"}

const TestHeader= ({test,selectedOption,selectOption}) => {
    return (
        <div className="w-screen">
        <header className="bg-white shadow">
            <div className="flex items-center space-x-6 mx-auto py-6 px-4 sm:px-6 lg:px-8">

            <div className="flex-shrink-0">
                <Link to={"/dashboard"}>
                    <img
                      className="h-8 w-8 cursor-pointer"
                      src={back}
                      alt="Workflow"
                    />
                </Link>
            </div>
            <div className="text-4xl font-bold text-gray-900">
                {test.name}
            </div>
            <div className ="w-25">
            </div>
            {Object.keys(items).map((item)=>(
                <button 
                    onClick={()=>selectOption(item)}
                    className={"px-4 py-1 mx-4 rounded-md text-lg font-bold border-2 border-gray-400"+
                    (selectedOption==item?" bg-gray-700 text-white":" text-gray hover:bg-gray-700 hover:text-white")}>
                    {items[item]}
                </button>
            ))}
            <div className="px-5 py-2 ml-12 rounded-sm text-2xl font-bold border-2 border-green-600 text-green-700 shadow-lg">
                00:00:45
            </div>
            <div className ="flex-grow">
            </div>
            <div className ="flex-grow">
            </div>
            <div className ="flex-grow">
            </div>
            <div className="flex-shrink-0">
                <Link to="/">
                    <img
                      className="cursor-pointer h-8 w-8 md:h-16 md:w-16"
                      src={logo_black}
                      alt="Workflow"
                    />
                </Link>
            </div>
            </div>
        </header>
    </div>
    )
}

export default TestHeader
