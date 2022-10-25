import React from 'react';

const TotalTutorial = ({tutorial}) => {
    console.log(tutorial);
    return (
        <div>
            <p>{tutorial.title}</p>
        </div>
    );
};

export default TotalTutorial;