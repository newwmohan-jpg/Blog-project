import React from 'react'
import { useDispatch } from 'react-redux'
import authservice from '../../Appwrite/Auth'
import { logout } from '../../Store/authSlice'

const Logoutbtn = () => {
    const dispatch = useDispatch()
    const logouthandeler =() =>{
        authservice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
   <button onClick={logouthandeler}
   className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default Logoutbtn