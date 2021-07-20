import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';

function AddPost() {

    const[title,settile] = useState('')
    const[imageurl,setimageurl] = useState('')
    const[description,setdescription] = useState('')

    function addpost() {
        var post = {
            title:title,
            imageurl:imageurl,
            description:description,
            postid:uniqid()
        }
        axios.post('/api/post/addnewpost',post).then(res=>{
            alert(res.data)
        }).then(err=>{
            console.log(err);
        })
    }

    return(

        <div className='row justify-content-center'>
          <div className='col-md-6'>

              <div>
                  <input type="text" placeholder="title" className='form-control' 
                  value={title} onChange={(e) => {settile(e.target.value)}} />

                  <input type="text" placeholder="imageurl" className='form-control' 
                  value={imageurl} onChange={(e) => {setimageurl(e.target.value)}} />

                  <textarea placeholder='Description' cols="30" rows="10" className='form-control' 
                  value={description} onChange={(e) => {setdescription(e.target.value)}} />

                  <button className='btn btn-success float-left' onClick={addpost}>Add Post</button>
              </div>

          </div>
        </div>
        
    );
}

export default AddPost;