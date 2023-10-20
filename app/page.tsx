'use client'

import Image from 'next/image'
import { BasicModal } from "./modals/BasicModal";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { getShop } from './api/utils';

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;
  const [shopData, setShopData] = useState(true);

  async function fetchData() {
    const book = getShop()
    book.then(res => {
      let data = res.data
      setShopData(data);
    })
  }
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {showModal && <BasicModal />}
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
          <form className="px-8 pt-6 pb-8 mb-4">
            {
              shopData ?
              <div className="flex items-center justify-center mb-4">
                <Link href="/?modal=true&state=0" className="bg-blue-500 hover:bg-blue-700 w-40 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  Book A Slot
                </Link>
              </div>
              : ''
            }
            <div className="flex items-center justify-center">
              <Link href="/?modal=true&state=1" className="bg-green-500 hover:bg-green-700 w-40 text-center text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Check Booking
              </Link>
            </div>
          </form>
        </div>
      </main>

      <footer className={`${shopData ? 'bg-green-700' : 'bg-red-700'} font-bold text-white text-center fixed inset-x-0 bottom-0 p-4`}> 
        Shop is currently {shopData ? 'Opened' : 'Closed'}!
      </footer> 
    </div>
    
  )
}
