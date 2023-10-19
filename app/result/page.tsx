'use client'

import Image from 'next/image'
import { ResultForm } from "./form";

export default function Result() {

  let b_item = localStorage.getItem('bookingItem')
  let data = null
  if (b_item) {
    data = JSON.parse(b_item);
  }
  
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
        <ResultForm redirectBack={true} formData={data}/>
        <p className="text-center text-gray-500 text-xs">
          Potong Kasi Cantek.
        </p>
      </div>
    </main>
  )
}


// let results: JSX.Element[] = []
//   const book = getTimes()
//   book.then(result =>{
//     result.data.forEach((element:any) => {
//       if (getTimeNow() == element.time) {
//         results.push(
//           <option key={element.time} value={element.time + ' ' + element.type.toUpperCase()} defaultValue={element.time}>{element.time} {element.type.toUpperCase()}</option>
//         )
//       } else {
//         results.push(
//           <option key={element.time} value={element.time + ' ' + element.type.toUpperCase()}>{element.time} {element.type.toUpperCase()}</option>
//         )
//       }
//     })
//   })