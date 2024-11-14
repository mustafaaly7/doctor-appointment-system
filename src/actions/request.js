
"use server"

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