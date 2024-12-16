import React from "react";
import Suggestion from "./Suggestion";

const RightSideBar = ({ user }) => {
    const suggestions = [
        { img: "https://picsum.photos/200?random=99", username: "name1", followedby: "[hasaan1]" },
        { img: "https://picsum.photos/200?random=9", username: "name2", followedby: "[hasaan2]" },
        { img: "https://picsum.photos/200?random=993", username: "name3", followedby: "[hasaan3]" },
        { img: "https://picsum.photos/200?random=992", username: "name4", followedby: "[hasaan4]" },
        { img: "https://picsum.photos/200?random=991", username: "name5", followedby: "[hasaan5]" },
    ];
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
            <div className="mt-4">
                <div className="flex justify-between items-center">
                    <p className="text-slate-500 text-sm font-semibold">
                        Suggested for you
                    </p>
                    <p className="text-black text-sm">See All</p>
                </div>
                {suggestions.map((suggestion, index) => (
                    <Suggestion
                        key={index}
                        img={suggestion.img}
                        username={suggestion.username}
                        followedby={suggestion.followedby}
                    />
                ))}
            </div>
        </div>
    );
};

export default RightSideBar;
