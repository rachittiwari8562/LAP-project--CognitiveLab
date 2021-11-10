import React from 'react'

const Profile = ({name}) => {

    return (
        <div className="float-right">
            <div className="pl-8 pr-3 py-2 mx-4 rounded-md text-lg font-bold border-2 border-gray-400 shadow-lg">
                {name}
                <button className="py-1 px-5 ml-4 rounded-md text-sm font-bold bg-green-700 text-white">Login</button>
            </div>
        </div>
    )
}

export default Profile
