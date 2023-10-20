"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation'
import {getCurrentDate, getTimeSelection, getTimeNow} from '../utils/date'
import { useRef, useEffect, JSX, useState } from 'react';
import { toast } from "react-toastify";
import { getBooking, postBooking } from "../api/booking";
import { getTimes } from "../api/utils";

export function BasicModal() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const state = searchParams.get('state') ?? "0"
  const [dataOption, setData] = useState<any[]>([])
  const [timeSelect, setTimeSelect] = useState(true)
  
  // let cntTrue = 0;
  // dataOption.forEach((e:any) => {
  //   if (e.booked) cntTrue++
  // })
  
  // if (cntTrue == dataOption.length) console.log('oi');

  let content
  if (state == '1') {
    content = <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    Phone Number*
                  </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number" placeholder="012345678" autoComplete="true" required/>
              </div>
  }

  if (state == '0') {
    content = <div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    Name*
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Name" autoComplete="true" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                      Phone Number*
                    </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" type="number" placeholder="012345678" autoComplete="true" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="b_date">
                    Date*
                  </label>
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="b_date" name="b_date" type="date" min={getCurrentDate('-')} onChange={changeData} required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="b_time">
                    Time*
                  </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="b_time" id="b_time" autoComplete="true" required disabled={timeSelect}>
                    {dataOption.map(element => {
                        return (<option key={element.time} value={element.time + ' ' + element.type.toUpperCase()} defaultValue={element.time + ' ' + element.type.toUpperCase()} disabled={element.booked ? element.booked : false}>{element.time} {element.type.toUpperCase()}</option>);
                    })}
                  </select>
                </div>
              </div>
  }

  function changeData(event:any) {
    fetchData(event.target.value);
  }

  async function fetchData(date:any) {
    const book = getTimes(date)
    book.then(res => {
      let data = res.data
      setData(data);
      setTimeSelect(false)
    })
  }

  const handleSubmit = (event:any) => {
    event.preventDefault();
    if (state == '0') {
      let name = event.target.elements.name.value
      let phone = event.target.elements.phone.value
      let b_date = event.target.elements.b_date.value
      let b_time = event.target.elements.b_time.value

      if (!name || !phone || !b_date || !b_time) {
        return alert('Please fill in all form!')
      }

      const data = {
        name: name,
        phone: phone,
        b_date: b_date,
        b_time: b_time,
      }
      
      if (confirm('Are you sure you to book?')) {
        postBook(data)
      }
    } else if (state == '1') {
      let phone = event.target.elements.phone.value

      if (!phone) {
        return alert('Please fill in all form!')
      }
      
      getBook(phone)
    }
    
  }

  function postBook (data:any) {
    const book = postBooking(data)
    book.then(result =>{
      if (result.status == 'OK') {
        localStorage.clear()
        localStorage.setItem('bookingItem',  JSON.stringify(result.data))
        toast(result.message, { hideProgressBar: false, autoClose: 2000, type: 'success', position:'bottom-right' })
        router.push(`/result?phone=${data.phone}`)
      } else {
        toast(result.message, { hideProgressBar: false, autoClose: 2000, type: 'error', position:'bottom-right' })
      }
    })
  }
  
  function getBook (phone:any) {
    const book = getBooking(phone)
    book.then(result =>{
      if (result.status == 'OK') {
        localStorage.clear()
        localStorage.setItem('bookingItem',  JSON.stringify(result.data))
        toast(result.message, { hideProgressBar: false, autoClose: 2000, type: 'success', position:'bottom-right' })
        router.push(`/result?phone=${phone}`)
      } else {
        toast(result.message, { hideProgressBar: false, autoClose: 2000, type: 'error', position:'bottom-right' })
      }
    })
  }

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      id="error-modal"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div >
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3
                className="text-lg leading-6 font-medium text-gray-900"
                id="modal-title"
              >
                {state == '1' ? 'Check Booking' : 'Book Now!'}
              </h3>
              <div className="mt-2">
                <form onSubmit={handleSubmit}>
                  {content}

                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                    <button
                      // onClick={submitData}
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mb-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Submit
                    </button>
                    <Link
                      href="/"
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 mb-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
