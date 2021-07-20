const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const schema = mongoose.Schema;

const postschema = new schema({
    title: String,
    imageurl: String,
    description: String,
    postid: String
})


const PostModel = mongoose.model('posts',postschema)

router.post('/addnewpost',(req,res) => {
    const newpost = new PostModel({
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description,
        postid:req.body.postid
    })
    newpost.save((err) => {
        if(!err) {
            res.send('new post added successfully')
        }
        else {
            res.send(err)
        }
    })
    
})



router.get('/getposts',(req,res) => {
    PostModel.find({},(doc,err)=> {
        if(!err) {
            res.send(docs)
        }else {
            res.send(err)
        }
    })
})

router.post('/updatepost',(req,res) => {
    PostModel.findOneAndUpdate({postid:req.body.postid},{
        title:req.body.title,
        imageurl:req.body.imageurl,
        description:req.body.description
    },(err) => {
        if(!error) {
            res.send('Post Updated Successfully')
        }else {
            res.send(err)
        }
    })
})

router.post('/deletepost',(req,res) => {
    PostModel.findOneAndDelete({postid:req.body.postid}, (err) => {
        if(!error) {
            res.send('Post deleted successfully')
        }else {
            res.send(err)
        }
    })
})

module.exports = router;