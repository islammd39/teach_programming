import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/programming-languages')
        .then(res=> res.json())
        .then(data=> setCategories(data))
    },[])

    return (
        <div>
            <h3 className='bg-warning'>side of left</h3>
            {
                categories.map(category=> <p key={category.id}>
                    <Link to={`tutorial/${category.id}`}>{category.category}</Link>
                </p>)
            }
        </div>
    );
};

export default LeftSide;