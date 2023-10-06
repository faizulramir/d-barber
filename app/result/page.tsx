import Image from 'next/image'
import Link from "next/link";

export default function Result() {
  return (
    <main className="grid h-screen place-items-center">
      <div className="w-full max-w-xs">
        <div className="mb-4 flex items-center justify-center">
          <Image
            className="relative"
            src="/icon.png"
            alt="D Barber"
            width={180}
            height={180}
            priority
          />
        </div>
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
          <div className="flex items-center justify-center">
            <Link href="/" type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Return
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Potong Kasi Cantek.
        </p>
      </div>
    </main>
  )
}
