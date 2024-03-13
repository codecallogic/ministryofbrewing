'use client'
import React, { useEffect, useState } from 'react'
import SVG from '@/app/_libs/svg'
import { navLinksLeft, navLinksRight, navLinks } from '@/app/_constants'
import { initApp } from '@/app/_helpers/main' 
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { useSelector } from 'react-redux'
import { logout } from "../_redux/features/authSlice";
import { useDispatch } from "react-redux";
import Cookies from 'universal-cookie';

function Nav() {

  const router = useRouter()
  const pathname = usePathname()
  const dispatch = useDispatch();
  const uCookies = new Cookies();
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

  const fixedClass = isFixed ? ' bg-schemefive ' : ' bg-black ';

  useEffect(() => {
    setLoginState(authReducer)
  }, [authReducer])

  const logoutUser = () => {
    console.log(pathname)
    try {
      dispatch(logout())
      uCookies.remove('token', { path: `${process.env.NEXT_SITE_URL}/${pathname}` });
      uCookies.remove('user', { path: `${process.env.NEXT_SITE_URL}/${pathname}` });
    } catch (error) {
      console.log(error)
    }
    
  }
  
  return (
    <header 
      id="nav" 
      className={`fixed py-8 z-20 w-full ${fixedClass} `}
      style={{ 
        boxShadow: pathname == '/signup' ? 'none' : '',
      }}
    >
      <nav className="flex justify-center items-center max-container px-5 lg:flex-row-reverse">
        <div className="max-lg:hidden flex justify-end ">
          <ul className="flex justify-end items-center px-3 gap-12 max-lg:hidden w-full">
            {navLinksRight.map((item, idx) => 
              <li 
                className="relative group"
                key={idx}
              >
                <a
                  href={item.href}
                  className="flex items-center justify-end w-[100%] leading-10 tracking-wide text-[14px] font-[600] font-eina text-white [&>*:nth-child(1)]:ml-2 hover:text-schemetwo transition-all ease-in-out uppercase"
                >
                  {pathname == '/armedprofessionals' ? item.label == 'Armed Professionals' ? 'Armed Citizen' : item.label : item.label }
                  {item.items.length > 0 &&
                    <SVG
                      svg={'arrowDown'}
                      alt="Arrow Down"
                      width={20}
                      height={20}
                      schemeOne={'#3E8BCC'}
                    />
                  }
                </a>
                <ul className="hidden absolute top-[20px] left-0 mt-4 space-y-2 bg-schemetwo rounded-lg text-gray-700 group-hover:block shadow-2xl hover:cursor-pointer">
                  { item.items.map((subitem, idx) => 
                    <li 
                      key={idx}
                      className="group-hover:block w-[300px] text-white hover:text-black hover:bg-white p-2 transition ease-in-out delay-50 border-b-schemefive font-[600] hover:rounded-top-lg capitalize"
                    >
                      <a href={subitem.href}>{subitem.label}</a>
                    </li>
                  )}
                </ul>
              </li>
            )}
          </ul>
        </div>
        <a href="/" className="w-[15%] max-lg:w-[10rem] mx-8">
          <img src="/assets/logo.png" alt="Fairline Defense Logo" />
        </a>
        <div>
          <ul className="flex justify-end items-center px-3 gap-12 max-lg:hidden w-full">
              {navLinksLeft.map((item, idx) => 
                <li 
                  className="relative group"
                  key={idx}
                >
                  <a
                    href={item.href}
                    className="flex items-center justify-end w-[100%] leading-10 tracking-wide text-[14px] font-[600] font-eina text-white [&>*:nth-child(1)]:ml-2 hover:text-schemetwo transition-all ease-in-out uppercase"
                  >
                    {pathname == '/armedprofessionals' ? item.label == 'Armed Professionals' ? 'Armed Citizen' : item.label : item.label }
                    {item.items.length > 0 &&
                      <SVG
                        svg={'arrowDown'}
                        alt="Arrow Down"
                        width={20}
                        height={20}
                        schemeOne={'#3E8BCC'}
                      />
                    }
                  </a>
                  <ul className="hidden absolute top-[20px] left-0 mt-4 space-y-2 bg-schemetwo rounded-lg text-gray-700 group-hover:block shadow-2xl hover:cursor-pointer">
                    { item.items.map((subitem, idx) => 
                      <li 
                        key={idx}
                        className="group-hover:block w-[300px] text-white hover:text-black hover:bg-white p-2 transition ease-in-out delay-50 border-b-schemefive font-[600] hover:rounded-top-lg capitalize"
                      >
                        <a href={subitem.href}>{subitem.label}</a>
                      </li>
                    )}
                  </ul>
                </li>
              )}
            </ul>
        </div>
        <button 
          id="hamburger-button"
          className='hidden max-lg:block max-lg:mr-8 hover:cursor-pointer text-3xl relative w-8 h-8'
          onClick={() => initApp()}
        >
          <div className="
            bg-white 
            w-8 h-1 
            rounded 
            absolute 
            top-4 
            mt-0.5 
            before:content-[''] 
            before:bg-white 
            before:w-8
            before:h-1 
            before:rounded 
            before:absolute 
            before:-translate-x-4 
            before:-translate-y-3
            before:transition-all
            before:duration-500
            after:content-[''] 
            after:bg-white 
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
          className="fixed top-[0px] left-[20px] z-200 bg-schemeone flex-col justify-center w-[225px] origin-left animate-open-menu hidden shadow-[20px_90px_60px_15px_rgba(0,0,0,0.3)] ml-[-30px]"
        >
            <div className="w-full flex justify-center py-12 hover:cursor-pointer">
              <img className="w-[80%]" src="/assets/logo.png" alt="Ministry of Defense Logo" />
            </div>
            <nav className="flex flex-col min-h-screen items-center py-12 px-2" aria-label="mobile">
            {navLinks.map((item, idx) => 
              <a 
                key={idx}
                href={item.href}
                className="flex items-center text-[16px] text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer">
                <SVG
                  svg={item.label.toLowerCase()}
                  alt={item.label}
                  width={30}
                  height={30}
                  schemeOne={'white'}
                  schemeTwo={'white'}
                />
                <span className="ml-3 max-sm:text-[16px]">{item.label}</span>
              </a>
            )}
            {loginState &&
              <a 
                className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer"
                onClick={() => (
                  router.push('/account')
                )}
              >
                <span className="ml-3 max-sm:text-[16px]">Account</span>
              </a>
            }
            {loginState &&
              <a 
                className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer"
                onClick={() => (
                  logoutUser(),
                  router.push('/login')
                )}
              >
                <span className="ml-3 max-sm:text-[16px]">Logout</span>
              </a>
            }
            {!loginState &&
            <a 
              onClick={() => router.push('/login')}
              className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer">
              <span className="ml-3 max-sm:text-[16px]">Login</span>
            </a>
            }
            {!loginState &&
            <a 
              onClick={() => router.push('/signup')}
              className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer">
              <span className="ml-3 max-sm:text-[16px]">Sign Up</span>
            </a>
            }
            <a 
              onClick={() => router.push('/contact')}
              className="flex items-center text-1xl text-schemetwo w-full text-center py-5 hover:opacity-90 border-b-[1px] border-schemetwo border-opacity-[.7] transition-all duration-800 hover:-translate-y-2 px-6 hover:cursor-pointer">
              <span className="ml-3 max-sm:text-[16px]">Contact</span>
            </a>
            </nav>
        </section>
      </nav>
    </header>
  )
}

export default Nav