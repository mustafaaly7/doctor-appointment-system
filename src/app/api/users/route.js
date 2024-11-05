import Connectdb from "@/lib/connectDb";
import { UserModel } from "@/lib/models/userModel";

export async function POST(req) {
    await Connectdb()
   try {
let obj = await req.json()
let userData =  new UserModel({...obj})
userData = await userData.save()
return Response.json({
    error: false,
    msg : "user registered successfully",
    user : userData,
},{status : 201})


    
   } catch (error) {
    return Response.json({
        error : true,
        msg: "something went wrong "
    } , {status : 400})

   }
}
export async function GET(req) { 
    await Connectdb()
    let userSearch = await UserModel.find()
    return Response.json({
        error : "false",
        msg : "data fetched successfully",
        users:userSearch,
    })
}
export async function PUT(req) { }
export async function DELETE(req) { }