
import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authservice from './Appwrite/Auth'
import { login, logout } from './Store/authSlice'
import { Footer, Header } from './component'


function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))

  }, [])


  return !loading ? (
    <div className='min-h-screen  flex flex-wrap content-between  bg-gray-400'>
      <div className='w-full block text-center'>
        <Header />
        {
          <main>
            TODO : {/* Outlet */}
          </main>
        }
        <Footer />
      </div>
    </div>
  ) : null


}

export default App
