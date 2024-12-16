import React from "react";

const RightSideBar = ({ user }) => {
    return (
        <div className="py-3 mt-3 w-full">
            <div className="flex justify-between">
                <div className="flex items-center justify-between gap-2">
                    <img
                        src="https://picsum.photos/200?random=99"
                        className="h-10 w-10 rounded-full"
                        alt="profile pic"
                    />
                    <span className="flex  flex-col justify-start items-start">
                        <span className="text-sm font-semibold">
                            {user.username}
                        </span>
                        <span className="text-md font-light text-gray-700">
                            {user.name}
                        </span>
                    </span>
                </div>
                <div>Logout</div>
            </div>
            <div></div>
        </div>
    );
};

export default RightSideBar;
