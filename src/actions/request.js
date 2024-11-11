


export default async function AddRequest(data){
const sendRequest = await fetch(`${process.env.BASE_URL}api/request`,{
    method:"POST",
    body :JSON.stringify(data)
})


}