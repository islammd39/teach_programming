import React from 'react';

const Blog = () => {
    return (
        <blockquote>
            <h5>what is cors?</h5>
            <p>One of the first features I worked on at my job as a software engineer was to provide support for CORS requests in our product, the Zenko CloudServer. What is CORS? I thought. What is it used for? Before I could start working on this feature, I had to build up a knowledge of what CORS was in the first place.“CORS” stands for Cross-Origin Resource Sharing. It allows you to make requests from one website to another website in the browser, which is normally prohibited by another browser policy called the Same-Origin Policy (SOP).</p>
            <h5>Why are you using firebase? and What other options do you have to implement authentication?</h5>
            <p>Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. and Auth0, MongoDB, Passport, Okta, and Firebase are the most popular alternatives and competitors to Firebase Authentication.</p>
            <h5>How does the private route work?</h5>
            <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
            <h5>What is Node? and </h5>
            <p>A node is a basic unit of a data structure, such as a linked list or tree data structure. Nodes contain data and also may link to other nodes. Links between nodes are often implemented by pointers. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
        </blockquote>
    );
};

export default Blog;