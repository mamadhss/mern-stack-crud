import React from 'react';

function PostItem({post}) {
    return(

        <div className='col-md-8 shadow p-3 bg-white rounded'>
            <h1 className='p-1'>{post.title}</h1>
            <img style={{height:'200px'}} src={post.imageurl} className='img-fluid p-1' />
            <p className='p-1'>{post.description}</p>
        </div>
        
    );
}

export default PostItem;