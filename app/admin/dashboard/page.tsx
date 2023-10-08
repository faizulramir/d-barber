import Image from 'next/image'
import { Nav } from "../components/nav";

export default function Dashboard() {
  return (
    <div>
      <Nav title="dashboard"/>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <div className="row-span-2 col-span-2">
                <div className="font-bold text-xl mb-2">Sale</div>
                <p className="text-gray-700 text-base">
                  This Month
                </p>
              </div>
              <div className="row-span-2 col-span-2 flex items-center justify-center">
                <p className="font-bold text-2xl">
                  RM 298
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <div className="row-span-2 col-span-2">
                <div className="font-bold text-xl mb-2">Sale</div>
                <p className="text-gray-700 text-base">
                  Total Sale
                </p>
              </div>
              <div className="row-span-2 col-span-2 flex items-center justify-center">
                <p className="font-bold text-2xl">
                  RM 4500
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
              <div className="row-span-2 col-span-2">
                <div className="font-bold text-xl mb-2">Customer</div>
                <p className="text-gray-700 text-base">
                  Total Customer
                </p>
              </div>
              <div className="row-span-2 col-span-2 flex items-center justify-center">
                <p className="font-bold text-2xl">
                  RM 298
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
