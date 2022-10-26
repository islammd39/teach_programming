import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('https://b610-lerning-platform-server-side-islammd39.vercel.app/programming-languages')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
            <h4>All Categories Here</h4>
            {
                categories.map(category=> <p key={category.id}>
                    <Link to={`tutorial/${category.id}`}>{category.category}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSide;