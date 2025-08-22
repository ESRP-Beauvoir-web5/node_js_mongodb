import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
        },
        firstName : {
            type : String
        },
        email : {
            type : String
        },
        password : {
            type : String
        },
        role : {
            type : String,
            default : "utilisateur"
        }
    },
    {
        timestamps : true
    }
)

userSchema.pre("save", async function() {
    if ( this.isModified("password") ) {
        this.password = await bcrypt.hash(this.password, 10)
    }
})

const User = mongoose.model('User', userSchema)

export default User