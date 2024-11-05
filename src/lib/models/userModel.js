const { default: mongoose } = require("mongoose");

const{Schema} = mongoose

const userSchema = new Schema({
    firstName:String,
    lastName:String,
    email:String, 
    picture:String,
    role:{type : String ,default:"user", enum : ["user", " admin" , "doctor"]},
    doctorInfo :{
        fees : Number,
        hospital : String,
        speciality : String,
        contact : Number,
        email : String,
        location : String,
    }
})

export const UserModel =  mongoose.models.Users ||  mongoose.model("Users" , userSchema)

