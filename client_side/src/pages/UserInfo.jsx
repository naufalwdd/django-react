import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function UserInfo() {
    const [userInfo, setUserInfo] = useState({})

    useEffect(() => {
        axios.get('/api/v2/user-info')
        .then((res) => {
            console.log(res.data)
            setUserInfo(res.data)
        })
        .catch((err) => {
            console.log(err.message)
        })
    }, [])
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h1 className='text-3xl font-bold mb-4'>User Info</h1>
            <p>Hello {userInfo.user_name}, here is your info</p>
            <p>Email: {userInfo.email}</p>
            <p>Age: {userInfo.age}</p>
            <p>Role: {userInfo.role}</p>
        </div>
    )
}
