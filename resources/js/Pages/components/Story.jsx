import React from "react";

const Story = ({ userName, profilePic, storyKey }) => {
    return (
        <div  key={storyKey} className="flex flex-col justify-center items-center">
            <div className="p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-full">
                <div className="p-[2px] bg-white rounded-full">
                    <img
                        className="min-w-14 h-14 rounded-full object-cover"
                        src={profilePic}
                        alt={userName}
                    />
                </div>
            </div>
            <p className="text-center w-full text-[12px] font-medium text-gray-800 mt-1">
                {userName}
            </p>
        </div>
    );
};


export default Story;
