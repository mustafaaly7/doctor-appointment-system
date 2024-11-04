import { ClockCircleOutlined, DollarOutlined, PlusOutlined } from "@ant-design/icons";
import Avatarimg from "./avatar";
import { Button } from "./ui/button";


export default function ProfileCard({ doctor }) {
    return (
        <>
            <div className="max-w-full w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-end px-4 pt-4">

                </div>
                <div className="flex flex-col items-center pb-10 gap-4">

                    <Avatarimg />
                    <h1 className="mb-1 text-4xl font-medium text-gray-900 dark:text-white">
                        {doctor.name}
                    </h1>
                    <span className="text-xl text-gray-500 dark:text-gray-400">
                        {doctor.specialty}
                    </span>
                </div>
                
                <div className="flex justify-around  items-center font-semibold my-2 ">

                    <h1 className="text-lg"><DollarOutlined /> Fees</h1>
                    <h1 className="text-lg">{doctor.fees}</h1>

                </div>
                

                <div className="flex justify-around items-center font-semibold my-2">
                    <h1 className="text-lg"><ClockCircleOutlined /> Timing :</h1>
                    <h1 className="text-lg">{doctor.timing}</h1>

                </div>
                <div className="flex justify-around items-center font-semibold my-2 ">
                    <h1 className="text-lg"><PlusOutlined/> Hospital :</h1>
                    <h1 className="text-lg">{doctor.hospital}</h1>

                </div>
                <div className="flex flex-col items-center pb-10 gap-4">

                <div className="flex mt-4 md:mt-6">
                    <Button className="text-lg ">See More</Button>
                </div>
                </div>

            </div>


        </>
    )

}