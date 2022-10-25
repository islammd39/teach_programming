import React from "react";
import { useLoaderData } from "react-router-dom";

const Tutorial = () => {
    const languages = useLoaderData();
    // console.log(languages);
    return (
        <div>
            <h3>Here is all Tutorial</h3>
        </div>
    );
};

export default Tutorial;