const { default: mongoose } = require("mongoose");

const{Schema} = mongoose

const RequestSchema = new Schema({
  user: { type: mongoose.Types.ObjectId, ref: "Users" },
    status :{type : String , default :"pending" ,enum :["pending","accepted" ,"rejected"]} ,
    bio:String,
  location:String,
  hospital:String,
  degree:String,
  phone: String,
  fees: String,
  appointmentTime:String,
})

export const RequestModel =  mongoose.models.Requests ||  mongoose.model("Requests" , RequestSchema)

