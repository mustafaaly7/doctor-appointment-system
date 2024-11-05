import mongoose from "mongoose";


export default async function Connectdb(){
    let isConnected = false;
    if(isConnected) return "db Connected"
    try {

        let connected = await mongoose.connect(process.env.MONGODB_URI)
if(connected.connection.readyState == 1){
    isConnected = true
    console.log("Db Connected Successfully");
    
}
    } catch (error) {
        console.log("error",error.message);
        
    }

}