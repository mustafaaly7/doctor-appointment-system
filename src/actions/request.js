
"use server"

import { revalidatePath } from "next/cache"

export  async function AddRequest(data){
let sendRequest = await fetch(`${process.env.BASE_URL}api/request`,{
    method:"POST",
    body :JSON.stringify(data)
})
sendRequest = sendRequest.json()
return sendRequest
}

export  async function GetRequest(){
    let Getdata = await fetch(`${process.env.BASE_URL}api/request`)
    Getdata = Getdata.json()
    return Getdata
    }

    export  async function UpdateRequest(id,status){
        let Getdata = await fetch(`${process.env.BASE_URL}api/request`,{
            method :"PUT",
            body:JSON.stringify({id,status})
        })
        Getdata = Getdata.json()
        revalidatePath("/admin/request")
        }