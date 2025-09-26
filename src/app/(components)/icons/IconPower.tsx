import React from "react";

const IconPower = ({ color }: { color: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-1 left-1 size-5 text-indigo-600"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" />
        </svg>
    );
};

export default IconPower;
