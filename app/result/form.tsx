import Link from "next/link";


export function ResultForm (data: any) {
    return(
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <span>Faizul</span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Phone Number
                </label>
                <span>0178016870</span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Date
                </label>
                <span>6/10/2023</span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Time
                </label>
                <span>18:00 PM</span>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Status
                </label>
                <span>Setel</span>
            </div>
            {
                data.redirectBack ?
                <div className="flex items-center justify-center">
                    <Link href="/" type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Return
                    </Link>
                </div>
                : ""
            }

            {
                data.submitAdmin ?
                <div className="grid grid-cols-2 gap-4">
                    <Link href="#" type="button" className="bg-red-500 items-center text-center hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Cancel
                    </Link>
                    <Link href="#" type="button" className="bg-green-500 items-center text-center hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Done
                    </Link>
                </div>
                : ""
            }
        </form>
    )
}