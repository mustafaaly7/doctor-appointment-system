import Connectdb from "@/lib/connectDb";
import { RequestModel } from "@/lib/models/Requestmodel";

export async function POST(req) {
    await Connectdb()
    try {
        let obj = await req.json()
        const userRequestedbefore = await RequestModel.findOne({ user: obj.user })
console.log("user requested before" , userRequestedbefore);

        if (userRequestedbefore) {
            return Response.json({
                error: true,
                msg: "You already  Requested Before",
            }, { status: 403 })

        }else{

            let newRequest = await new RequestModel({ ...obj });
            newRequest = await newRequest.save()
            return Response.json({
            error: false,
            msg: "Request registered successfully",
            Request: newRequest,
        }, { status: 201 })
        
    }
        
        
    } catch (error) {
        return Response.json({
            error: true,
            msg: "something went wrong "
        }, { status: 400 })
        
    }
}
export async function GET(req) {
    await Connectdb()
    let Requestsearch = await RequestModel.find()
    return Response.json({
        error: "false",
        msg: "Request fetched successfully",
        Request: Requestsearch,
    })
}
export async function PUT(req) { }
export async function DELETE(req) { }