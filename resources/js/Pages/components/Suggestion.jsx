import React from "react";

const Suggestion = ({ img, username, followedby }) => {
    return (
        <div className="flex justify-between items-center my-3">
            <div className="flex justify-between gap-2">
                <img
                    className="h-10 w-10 rounded-full"
                    src={img}
                    alt={`${username}'s profile`}
                />
                <div>
                    <p  className="text-sm font-semibold"> {username}</p>
                    <p className="text-sm font-light text-gray-700"> {followedby}</p>
                </div>
            </div>
            <p className="text-sky-500 text-sm font-semibold">Follow</p>
        </div>
    );
};

export default Suggestion;
