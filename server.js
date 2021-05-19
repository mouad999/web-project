const express = require('express');
const bodyParser = require('body-parser');
const posts = require('./routes/posts');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

const db = require('./config/key').mongoURI;
mongoose.connect(db,{ useFindAndModify: false }).then(()=>console.log('db connected')).catch(err=>console.log(err));

var cors = require('cors');
app.use(cors());

app.use('/',posts);

app.listen(5000);