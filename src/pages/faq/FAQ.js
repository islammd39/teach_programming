import React from 'react';

const FAQ = () => {
    return (
        <blockquote>
            <h5>How should I structure my application?</h5>
            <p>There is no definitive answer to this question. The answer depends on the scale of your application and the team that is involved. To be as flexible as possible, Express makes no assumptions in terms of structure.</p>
            <br />
            <p>Routes and other application-specific logic can live in as many files as you wish, in any directory structure you prefer. View the following examples for inspiration</p>
            <ul>
                <li>npx create-react-app</li>
                <li>npm install react-router-dom</li>
                <li>npm install react-bootstrap bootstrap</li>
                <li>import 'bootstrap/dist/css/bootstrap.min.css'</li>
            </ul>
            <h5>How can I authenticate users?</h5>
            <p>Authentication is another opinionated area that Express does not venture into. You may use any authentication scheme you wish. For a simple email/ username / password scheme</p>
            <ul>
                <li>npm i firebase</li>
            </ul>
            <h5>How can I work database?</h5>
            <p>Adding the capability to connect databases to Express apps is just a matter of loading an appropriate Node.js driver for the database in your app. This document briefly explains how to add and use some of the most popular Node.js modules for database systems in your Express app</p>
            <ul>
                <li>npm i ExpressJS</li>
            </ul>
            <h5>How do I define models?</h5>
            <ul>
                <li>set up pages(home, login, signup)</li>
                <li>set up layout(main)</li>
                <li>set up shared(header, leftSide, totalTutorial)</li>
                <li>set up routes(router, private router)</li>
                <li>load data in express.js</li>
                <li>authentication from firebase</li>
                <li>create context auth</li>
                <li>use context</li>
            </ul>
            <h5>How can i manage Error pages</h5>
            <p>simple i do route on '*' routes and create error component page</p>
        </blockquote>
    );
};

export default FAQ;