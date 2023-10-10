'use client'

import Image from 'next/image'
import Link from "next/link";
import getToken from '@/app/api/auth/token';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";

export default function AdminLogin() {
  const router = useRouter()

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem('token')) {
      router.push('/admin/dashboard/')
    }
  }, [])

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  function submitForm () {
    const user = getToken(emailRef.current!.value, passwordRef.current!.value)
    user.then(result =>{
      if (result) {
        if (!localStorage.getItem('token')) {
          localStorage.setItem('token', result.token);
        }
        toast('Success!', { hideProgressBar: false, autoClose: 2000, type: 'success', position:'bottom-right' })
        router.push('/admin/dashboard/')
      } else {
        toast('Wrong Password/Email!', { hideProgressBar: false, autoClose: 2000, type: 'error', position:'bottom-right' })
      }
    })
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
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input ref={emailRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" name='email' type="email" placeholder="Email"/>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input ref={passwordRef} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" name='password' type="password" placeholder="******************" />
            {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
          </div>
          <div className="flex items-center justify-center">
            <button onClick={submitForm} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
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
