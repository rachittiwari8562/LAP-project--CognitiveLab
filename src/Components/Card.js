import React from 'react'

var notSelectedStyle="group bg-gray-100 text-center md:w-2/3 lg:w-2/3 h-36 md:h-60 hover:bg-purple-700 hover:text-white rounded-lg shadow-2xl overflow-hidden my-10 text-gray-700 cursor-pointer"
var selectedStyle = "group text-center md:w-2/3 lg:w-2/3 h-36 md:h-60 bg-purple-700  rounded-lg shadow-2xl overflow-hidden my-10 text-white cursor-pointer"

var subStyle=""
const checkSelected = (name,selected)=>{
    if (name==selected){
        subStyle="text-xs md:text-lg text-white font-bold"
        return selectedStyle
    }
    else{
        subStyle="text-xs md:text-lg text-gray-600 font-bold group-hover:text-white"
        return notSelectedStyle
    }
}

const Card = ({selectTest,item,selected})=>{
    return (
        <button onClick={()=>selectTest(item.routing)} className={checkSelected(item.routing,selected)}>
            <div className="h-1/3 pt-1 md:pt-6">
            <h4 className="text-md md:text-1xl lg:text-3xl font-bold">{item.name}</h4>
            </div>
            <div className="h-2/3 pb-2 md:pb-10 px-4">
                <h4 className={subStyle}>{item.about}</h4>
            </div>
        </button>
    )
}

export default Card
