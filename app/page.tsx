import Image from 'next/image'
import { BasicModal } from "./modals/BasicModal";
import Link from "next/link";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: Props) {
  const showModal = searchParams?.modal;
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
            <div className="flex items-center justify-center mb-4">
              <Link href="/?modal=true&state=0" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Book A Slot
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/?modal=true&state=1" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Check Booking
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
    
  )
}
