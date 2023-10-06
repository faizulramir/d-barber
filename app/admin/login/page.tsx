import Image from 'next/image'

export default function Admin() {
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
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          Potong Kasi Cantek.
        </p>
      </div>
    </main>
  )
}
