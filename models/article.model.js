import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const articleSchema = new mongoose.Schema(
    {
        title : {
            type : String,
        },
        content : {
            type : String
        },
        author : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        }
    },
    {
        timestamps : true
    }
)

const Article = mongoose.model('Article', articleSchema)

export default Article