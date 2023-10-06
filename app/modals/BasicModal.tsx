"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from 'next/navigation'
import {getCurrentDate, getTimeSelection, getTimeNow} from '../utils/date'
import { JSX } from "react";

export function BasicModal() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const state = searchParams.get('state') ?? "0"

  let result: JSX.Element[] = []
  getTimeSelection().forEach(element => {
    if (getTimeNow() == element.time) {
      result.push(
        <option key={element.time} value={element.time} defaultValue={element.time}>{element.time} {element.type}</option>
      )
    } else {
      result.push(
        <option key={element.time} value={element.time}>{element.time} {element.type}</option>
      )
    }
  })

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
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="Name" autoComplete="true"/>
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
                  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="b_date" name="b_date" type="date" min={getCurrentDate('-')} value={getCurrentDate('-')} onChange={changeData} autoComplete="true" required/>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="b_time">
                    Time*
                  </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="b_time" id="b_time" autoComplete="true" required>
                    {result.map(item => {
                        return (item);
                    })}
                  </select>
                </div>
              </div>
  }

  function changeData() {

  }

  function submitData() {
    router.push('/result?phone=0178016870')
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
                <form >
                  {content}
                </form>
              </div>
            </div>
          </div>
          <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
            <button
              onClick={submitData}
              type="button"
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
        </div>
      </div>
    </div>
  );
}
