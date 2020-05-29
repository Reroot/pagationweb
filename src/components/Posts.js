import React from 'react';
//racf
//get our props passed down
export const Posts = ({posts, loading}) => {
    
    if(loading === true) {
        return <h2>Loading....</h2>//add animations
    }

    
     
    return (
            <ul className='list-group'>
                {/* //make sure to mass props downf rom parent
                //otherwise this wont do anything. */}
                {posts.map(post => (
                    <li key={post.id} className='list-group-item'>
                        {post.title}
                    </li>
            ))}
            </ul>
    );

};
