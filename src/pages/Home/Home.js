import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TotalTutorial from '../../shared/totalTutorial/TotalTutorial';

const Home = () => {
    const allTutorial = useLoaderData();
    return (
        <div>
            <h4>all tutorial {allTutorial.length}</h4>
             {
                allTutorial.map(tutorial=><TotalTutorial key={tutorial.id} tutorial={tutorial}></TotalTutorial>)
             }
        </div>
    );
};

export default Home;