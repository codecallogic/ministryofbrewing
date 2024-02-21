'use client'
import SVG from '@/app/_libs/svg'
import { changeInputType, verifyEmail } from '@/app/_helpers/main'
import { useState, useEffect } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

//// COMPONENTS
import Button from '@/app/_components/_forms/button'

//// MUTATIONS
import ADMIN_LOGIN from '@/app/_mutations/adminLogin'

const AdminLogin = ({}) => {

  const router = useRouter();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const [ login, { dataLoginForm, loadingLoginForm, errorLoginForm }] = useMutation(ADMIN_LOGIN)

  const reset = () => {
    setError('')
  }

  const submitLogin = async (e) => {
    e.preventDefault()

    if(!verifyEmail(email)) return setError('Email is invalid')
    if(!password) return setError('Password is required')
    
    try {
      const response = await login({
        variables: {
          email,
          password
        }
      })

      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 60 * 60 * 1000); 

      setCookie('adminToken', response.data.adminLogin.token, { expires: expirationDate })
      setCookie('adminUser', response.data.adminLogin, { expires: expirationDate })

      router.push('/admin');
      
    } catch (error) {
      
      console.log(error)
      if(error) setError(error.message)
    }
    
  }
  
  return (
    <section
      className="relative bg-gradient-to-l to-schemethree from-50% from-schemefour w-full"
    >
      <div
        className="min-h-[85vh] bg-no-repeat bg-[length:45rem_45rem] bg-[left_-2rem_top_10rem] flex justify-center"
      >
        <div className="w-[30rem] flex flex-col items-center px-[2rem] mt-[15rem] mb-[25rem]">
          <h1 className="text-white py-6 font-[600] text-[30px] self-start font-eina">Admin Login</h1>
          <div className="w-[100%] grid grid-cols-1 gap-x-2 gap-y-4 ">
            <div className="relative">
              <input 
                type="email" 
                id="hs-floating-input-email" 
                className="peer p-5 block w-full border-schemethree rounded-lg text-sm placeholder:text-transparent focus:border-schemethree focus:ring-schemethree disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600
                focus:pt-7
                focus:pb-3
                [&:not(:placeholder-shown)]:pt-7
                [&:not(:placeholder-shown)]:pb-3
                autofill:pt-7
                autofill:pb-3
                outline-transparent
                "
                placeholder="you@email.com"
                value={email}
                onChange={(e) => (setEmail(e.target.value), reset())}
              />
              <label htmlFor="hs-floating-input-email" className="absolute top-0 start-0 p-5 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500">Email</label>
            </div>
            <div className="relative">
              <input 
                id="loginPassword" 
                type="password" 
                className="peer p-5 block w-full border-schemethree rounded-lg text-sm placeholder:text-transparent focus:border-schemethree focus:ring-schemethree disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-black dark:focus:ring-gray-600
                focus:pt-7
                focus:pb-3
                [&:not(:placeholder-shown)]:pt-7
                [&:not(:placeholder-shown)]:pb-3
                autofill:pt-7
                autofill:pb-3
                outline-transparent
                " 
                placeholder="" 
                value={password}
                onChange={(e) => (setPassword(e.target.value), reset())}
              />
              <label htmlFor="loginPassword" className="absolute top-0 start-0 p-5 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-gray-500
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-gray-500">Password</label>
              <div 
                className="absolute top-[25%] right-3 hover:cursor-pointer"
                onClick={() => (changeInputType('loginPassword', 'password', 'text'), reset())}
              >
                <SVG
                  svg={'eye'}
                  alt="Eye"
                  width={25}
                  height={25}
                  schemeOne={'#626262'}
                />
              </div>
            </div>
          </div>
          <div 
            className="w-full flex justify-end"
          >
            <span 
              className="text-white py-3 hover:cursor-pointer"
              onClick={() => router.push('/admin/forgotPassword')}
            >
              Forgot your password?
            </span>
          </div>
          { error &&
            <p className="text-lg text-schemetwo py-2">{error}</p>
          }
          <div 
            className="w-[100%] flex justify-center mt-10 max-md:w-[340px]"
            onClick={(e) => submitLogin(e)}
          >
            <Button 
              label='Login'
              backgroundColor={'black'}
              svgColor={'black'}
              width={340}
              height={50}
              fullWidth={true}
              textColor={'#FFFFFF'}
              borderColor={'black'}
              svg={''}
              borderRadius={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminLogin
