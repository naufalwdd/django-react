import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Todo() {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        GetTodoList()
    }, [])

    function GetTodoList() {
        axios.get('/api/todos')
        .then((res) => {
            console.log(res.data)
            setTodo(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }

    return (
        <div className='w-full h-screen flex flex-col items-center justify-center bg-gray-100'>
            <div className='bg-white drop-shadow-md p-10 rounded-xl flex flex-col items-center justify-center w-[50%]'>
                <h1 className='font-bold mb-4'>Todo List</h1>
                <div className="p-3 bg-white rounded-xl mt-4 overflow-scroll md:overflow-auto w-full">
                    <table className='w-full'>
                        <thead className='bg-blue-500 text-white'>
                            <tr className='w-full h-[36px] text-left'>
                                <th className='px-2 text-[12px] md:text-sm hover:cursor-pointer'>ID</th>
                                <th className='px-2 text-[12px] md:text-sm hover:cursor-pointer'>Title</th>
                                <th className='px-2 text-[12px] md:text-sm hover:cursor-pointer'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todo.map((todo) => (
                                <tr key={todo.id} className='h-[32px]'>
                                    <td className='px-2 text-[12px] md:text-sm'>{todo.id}</td>
                                    <td className='px-2 text-[12px] md:text-sm'>{todo.title}</td>
                                    {todo.completed 
                                        ? 
                                            <td className='px-2 text-[12px] md:text-sm text-green-600 font-bold'>Completed</td>
                                        : 
                                            <td className='px-2 text-[12px] md:text-sm text-red-500 font-bold'>Not Completed</td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
