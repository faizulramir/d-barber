'use client'

import Image from 'next/image'
import Link from "next/link";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function Nav(data: any) {
    function toggleBurger () {
        var element = document.getElementById('navbar-hamburger')
        if (element?.classList.contains("hidden")) {
            element.className = 'w-full'
        } else {
            element!.className = 'hidden w-full'
        }
    }

    const router = useRouter()

    useEffect(() => {
        // Perform localStorage action
        if (!localStorage.getItem('token')) {
            router.push('/admin/login/')
        }
    }, [])

    function logOut () {
        localStorage.clear();
        router.push('/admin/login/')
    }
    
    return (
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/admin/dashboard/" className="flex items-center">
                    <Image
                        src="/icon.png"
                        alt="D Barber"
                        width={100}
                        height={100}
                        priority
                    />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{data.title[0].toUpperCase() + data.title.substring(1)}</span>
                </Link>
                <button onClick={toggleBurger} data-collapse-toggle="navbar-hamburger" type="button" className="inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className="hidden w-full" id="navbar-hamburger">
                    <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <Link href="/admin/dashboard" className={data.title == 'dashboard' ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600' : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'} aria-current="page">Dashboard</Link>
                        </li>
                        <li>
                            <Link href="/admin/booking" className={data.title == 'booking' ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600' : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}>Booking</Link>
                        </li>
                        <li>
                            <a onClick={logOut} href="#" className={data.title == 'logout' ? 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded dark:bg-blue-600' : 'block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
