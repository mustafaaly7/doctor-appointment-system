import Image from "next/image"
import { auth } from "../../../auth"


export default async function Profile() {
    const session = await auth()
    return(
        <div>

{session ?(
    <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
    {/* Card start */}
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
      <div className="border-b px-4 pb-6">
        <div className="text-center my-4">
            <Image
            width={100}
            height={100}
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"

            src={session?.user?.image}
            />
          {/* <img
            className="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
            src={session?.user?.image}
            alt=""
          /> */}
          <div className="py-2">
            <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
              {session?.user?.name}
            </h3>
            <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
              <svg
                className="h-5 w-5 text-gray-400 dark:text-gray-600 mr-1"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
              >
                <path
                  className=""
                  d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
                />
              </svg>
              {session?.user?.email}
            </div>
          </div>
        </div>
        
      </div>
    </div>
    {/* Card end */}
  </div>
  
):(
    <h1 className="text-center text-3xl min-h-screen">Failed To Load Profile Try again</h1>
)}



</div>
    )
    
}