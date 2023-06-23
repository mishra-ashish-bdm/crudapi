import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
     Name:{
          type:String
     },
     Contact:{
        type:Number
     },
     email:{
         type:String
     }
})


const User = mongoose.model('user',userSchema)


export default User