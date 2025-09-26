"use client";
import React, { useEffect, useState } from "react";

const Test = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:8000/test");
            const data = await response.json();
            setData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <p>test</p>
        </div>
    );
};

export default Test;
