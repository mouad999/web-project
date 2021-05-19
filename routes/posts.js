const express = require('express');
const router = express.Router();
const multer = require('multer')

const Post = require('../models/post');

const storage = multer.diskStorage({
    destination: (req,file, cb)=>{
        cb(null,"./myclone/src/uploads");
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
}})

const upload = multer({storage:storage});





router.get('/',(req,res)=>{
    Post.find().then(posts=>res.json(posts));
});

router.post('/', upload.single("postimage"),(req,res)=>{
    const item = new Post({
      statu: req.body.statu,
      postimage: req.file.originalname
    });
    item.save().then(item => res.json(item));
});
router.put('/',(req,res)=>{
    Post.findByIdAndUpdate({_id : req.body.id},{$push:{comments:req.body.com}}).then(item=>res.json(item));
});

module.exports = router ;