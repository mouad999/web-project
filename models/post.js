const mongoose=require('mongoose');
const schema = mongoose.Schema ;

const postSchema = new schema({
    user:{
        type: String,
        default: "user"
    },
    statu:{
        type: String,
        required: true
    },
    comments:{
        type: Array,
        default: []
    },
    postimage:{
        type: String,
        default:""
    }

});

module.exports = mongoose.model('posts',postSchema);