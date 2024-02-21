'use client'
import React, { useEffect, useState } from 'react'
import SVG from '@/app/_libs/svg'
import { navLinks } from '@/app/_constants'
import { initApp } from '@/app/_helpers/main' 
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { logout } from "@/app/_redux/features/authSlice";
import { useDispatch } from "react-redux";

function Nav() {

  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch();
  const authReducer = useSelector((state) => state.authReducer.value.loggedIn)
  const [loginState, setLoginState] = useState(false)
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Adjust the scroll threshold as needed
      const threshold = 140;

      // Check if the scroll position is beyond the threshold
      if (scrollPosition > threshold) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const fixedClass = isFixed ? ' bg-black ' : ' bg-transparent';

  useEffect(() => {
    setLoginState(authReducer)
  }, [authReducer])
  
  return (
    <header 
      id="nav" 
      className={`fixed py-8 z-20 w-full  ${fixedClass}`}
      style={{ 
        // backgroundColor: pathname == '/signup' ? 'transparent!important' : '',
        boxShadow: pathname == '/signup' ? 'none' : '',
        // position: pathname == '/signup' ? 'relative!important' : ''
      }}
    >
      <nav className="flex justify-between items-center min-[1024px]:px-20 max-lg:px-5 ">
        <div className="hidden w-[50rem]">
          <ul className="flex justify-end items-center gap-12 max-lg:hidden mr-[-100px]">
            {navLinks.map((item, idx) => 
              <li 
                className="relative group"
                key={idx}
              >
                <a
                  href={pathname == '/armedprofessionals' ? '/' : item.href}
                  className="flex justify-end w-[100%] leading-10 tracking-wide text-[16px] font-[600] font-eina text-schemetwo  [&>*:nth-child(1)]:ml-2"
                >
                  {pathname == '/armedprofessionals' ? 'Armed Citizen' : item.label }
                  {item.items.length > 0 &&
                    <SVG
                      svg={'arrowDown'}
                      alt="Arrow Down"
                      width={25}
                      height={25}
                      schemeOne={'white'}
                    />
                  }
                </a>
                <ul className="hidden absolute top-[20px] left-0 mt-2 space-y-2 bg-schemetwo rounded-lg text-gray-700 group-hover:block shadow-2xl hover:cursor-pointer">
                  { item.items.map((subitem, idx) => 
                    <li 
                      key={idx}
                      className="group-hover:block w-[250px] hover:bg-schemefive text-schemefive hover:text-schemetwo p-2 transition ease-in-out delay-50 border-b-schemefive"
                    >
                      <a href={subitem.href}>{subitem.label}</a>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
          {loginState &&
            <div className='w-2/5 flex justify-end items-center gap-2 text-[16px] leading-normal text-schemetwo font-[600] font-eina max-lg:hidden wide:mr-12'>
              <a className="p-3" href="" onClick={() => (
                dispatch(logout()),
                router.push('/login')
              )}>
                Logout
              </a>
              <span>/</span>
              <a 
              className="bg-schemethree px-3 py-2 rounded-xl" 
              onClick={() => (
                router.push('/account')
              )}>
                Account
              </a>
            </div>
          }
          {!loginState &&
            <div className='w-2/5 flex justify-end items-center gap-2 leading-10 text-schemetwo font-[600] font-eina text-[16px] max-lg:hidden wide:mr-12'>
              <a className="p-3" href='/login'>Sign in</a>
              <span>/</span>
              <a className="bg-schemethree px-3 py-2 rounded-xl" href='/signup'>Join Now</a>
            </div>
          }
        </div>
        <a href="/" className="w-[15%] max-lg:w-[10rem] ">
          <img src="/assets/logo.png" alt="Fairline Defense Logo" />
        </a>
        <button 
          id="hamburger-button"
          className='hidden max-lg:block max-md:mr-4 hover:cursor-pointer text-3xl relative w-8 h-8'
          onClick={() => initApp()}
        >
          <div className="bg-schemetwo w-8 h-1 rounded absolute top-4 mt-0.5 
            before:content-[''] 
            before:bg-schemetwo 
            before:w-8
            before:h-1 
            before:rounded 
            before:absolute 
            before:-translate-x-4 
            before:-translate-y-3
            before:transition-all
            before:duration-500
            after:content-[''] 
            after:bg-schemetwo 
            after:w-8 
            after:h-1 
            after:rounded 
            after:absolute 
            after:-translate-x-4 
            after:translate-y-3
            after:transition-all
            after:duration-500
          ">
          </div>
        </button>
        <section 
          id="mobile-menu"
          className="fixed top-[0px] left-[20px] z-200 bg-schemefive flex-col justify-center w-[225px] origin-left animate-open-menu hidden shadow-[20px_90px_60px_15px_rgba(0,0,0,0.3)] ml-[-30px]"
        >
            <div className="w-full flex justify-center py-12 ">
              <img className="w-[80%]" src="/assets/logo.png" alt="Fairline Defense Logo" />
            </div>
            <nav className="flex flex-col min-h-screen items-center py-12 px-2" aria-label="mobile">
            {navLinks.map((item, idx) => 
              <a 
                key={idx}
                href={pathname == '/armedprofessionals' ? '/' : item.href}
                className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6">
                <SVG
                  svg={item.label.toLowerCase()}
                  alt={item.label}
                  width={30}
                  height={30}
                  schemeOne={'white'}
                  schemeTwo={'white'}
                />
                <span className="ml-3 text-[16px]">{pathname == '/armedprofessionals' ? 'Armed Citizen' : item.label}</span>
              </a>
            )}
            {loginState &&
              <a 
                className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6"
                onClick={() => (
                  router.push('/account')
                )}
              >
                <span className="ml-3 text-[16px]">Account</span>
              </a>
            }
            {loginState &&
              <a 
                className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6"
                onClick={() => (
                  dispatch(logout()),
                  router.push('/login')
                )}
              >
                <span className="ml-3 text-[16px]">Logout</span>
              </a>
            }
            {!loginState &&
            <a 
              href={'/login'}
              className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6">
              <span className="ml-3 text-[16px]">Login</span>
            </a>
            }
            {!loginState &&
            <a 
              href={'/signup'}
              className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6">
              <span className="ml-3 text-[16px]">Sign Up</span>
            </a>
            }
            </nav>
        </section>
      </nav>
    </header>
  )
}

export default Nav