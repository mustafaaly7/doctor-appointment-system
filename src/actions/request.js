
"use server"

export default async function AddRequest(data){
let sendRequest = await fetch(`${process.env.BASE_URL}api/request`,{
    method:"POST",
    body :JSON.stringify(data)
})
sendRequest = sendRequest.json()
return sendRequest
}