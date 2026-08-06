import React , {useState} from 'react'
import {Link , useNavigate} from 'react-router-dom'
import {Login as authLogin} from '../Store/authSlice'
import {Button , Input , Logo} from './index'
import { useDispatch } from 'react-redux'
import authservice from '../Appwrite/Auth'
import {useForm} from 'react-hook-form'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register , handleSubmit} = useForm()
    const [error, setError] = useState(" ")

    const login = async(data)=> {
        setError("")
        try { 
            const session = await authservice.login(data)
            if(session){
                const userData = await authservice.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
            
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'>
        <div className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'> 

<div className='mb-2 flex justify-center'>
    <span className='inline-block w-full max-w-25'>
        <Logo width="100px" />
    </span>
</div>
 <h2 className='text-center text-2xl font-bold leading-tight'>Sign in to your account</h2>
 <p className='mt-2 text-center text-base text-black/60'>
Don&apost;t have an account?&nbsp;
<Link 
to='/signup'
className='text-primary font-medium transition-all duration-200 hover:underline'
>
Sign up </Link>
 </p>
{
    error && <p className='text-red-500 mt-0 text-center'></p>
}
<form onSubmit={handleSubmit(login)}
className='mt-8'>
    <div className='space-y-5'>
        <Input type="email"
        label = "Email :"
        placeholder='Enter your mail'
        {...register("email" , {
            required : true ,
            validate : {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
            }
        })} />
        <Input 
        label = 'password'
        type = 'password'
        placeholder = 'enter your password'
        {...register('password' , {
            required : true,
        })}
        />
        <button
        type='submit'
        className='w-full'>Sign In</button>
    </div>

</form>
        </div>
      
    </div>
  )
}

export default Login
