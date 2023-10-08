import Image from 'next/image'
import Link from "next/link";
import { ResultForm } from "./form";

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
        <ResultForm redirectBack={true}/>
        <p className="text-center text-gray-500 text-xs">
          Potong Kasi Cantek.
        </p>
      </div>
    </main>
  )
}
