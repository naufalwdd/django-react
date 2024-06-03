import React from 'react'

export default function Home() {
    const HandleRedirect = (url) => {
        document.location.href = `/${url}`
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='bg-white drop-shadow-md p-10 rounded-xl flex flex-col items-center justify-center w-[500px]'>
                <h1 className='text-3xl font-bold mb-2'>This is Homepage</h1>
                <p className='mb-8'>Please choose where you want to go</p>
                <button className='bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-400' onClick={() => HandleRedirect('todo')}>Go to Todo</button>
                <button className='bg-blue-500 text-white rounded-md px-4 py-1 hover:bg-blue-400 mt-4' onClick={() => HandleRedirect('user-info')}>Go to User Info</button>
            </div>
        </div>
    )
}