
import SVG from '@/app/_libs/svg'
import { useEffect } from 'react'

//// HELPERS
import { initApp } from '@/app/_helpers/main'

const Nav = ({
  dispatch,
  changeView,
  logout,
  router,
  view,
  user
}) => {
  
  return (
    <div
      id="mobile-menu"
      className="hidden absolute left-0 top-0 z-20 w-[345px] bg-black h-[100%] shadow-lg dark:bg-darkSchemeOne"
    >
      <div className="w-full flex flex-col items-center relative overflow-y-auto">
        <div
          className="absolute top-5 right-2 hover:cursor-pointer shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all ease-in-out hover:top-4"
          onClick={() => initApp()}
        >
          <SVG
            svg={'close'}
            width={25}
            height={25}
            schemeOne={'white'}
          >
          </SVG>
        </div>
        <div 
          className="w-[224px] h-[120px] py-[25px]"
        >
          <img 
            className="w-[224px] h-[100%] hover:cursor-pointer"
            src="/assets/logo.png" 
            alt="Logo" 
          />
        </div>
        <div>
          <div className="flex items-center">
            <div className="ml-[30px] rounded-[50%] w-[60px] h-[60px] bg-gradient-to-r from-schemetwo via-schemethree to-schemefour p-1">
              <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-white back p-1">
                <div className="rounded-[50%] flex h-full w-full items-center justify-center bg-grey back p-1">

                </div>
              </div>
            </div>
            <div className="flex flex-col mx-3 text-white">
              <h2 className="font-[600] text-[18px]">{user ? user.firstName : 'N/A'} {user ? user.lastName : 'N/A'}</h2>
              <h2 className="font-[400] text-[16px]">{user ? user.email.substring(0, 20) : 'N/A' }</h2>
            </div>
          </div>
          <div className="w-[345px] px-[50px] text-[18px] font-[900] pt-[20px] text-white">Main Menu</div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'dashboard' ? 'text-white border-l-[9px] border-white tab bg-schemefour rounded-br-[150px] rounded-tr-[20px]' : ' text-white' )}
            onClick={() => dispatch(changeView('dashboard'), initApp())}
          >
            <SVG
              svg={'home'}
              width={24}
              height={24}
              schemeOne={'white'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'dashboard' ? ' font-[700] ' : '' ) }>Dashboard</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'beers' ? 'text-white border-l-[9px] border-white tab bg-schemefour rounded-br-[150px] rounded-tr-[20px]' : ' text-white' )}
            onClick={() => dispatch(changeView('beers'), initApp())}
          >
            <SVG
              svg={'beer'}
              width={24}
              height={24}
              schemeOne={'white'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'beers' ? ' font-[700] ' : '' ) }>Beers</span>
          </div>
          <div
            className={`w-[303px] px-[50px] mt-[12px] h-[60px] flex items-center gap-x-[30px] hover:cursor-pointer ` + ( view == 'events' ? 'text-white border-l-[9px] border-white tab bg-schemefour rounded-br-[150px] rounded-tr-[20px]' : ' text-white' )}
            onClick={() => dispatch(changeView('events'), initApp())}
          >
            <SVG
              svg={'event'}
              width={24}
              height={24}
              schemeOne={'white'}
            >
            </SVG>
            <span className={`text-[18px] leading-[30px] ` + ( view == 'events' ? ' font-[700] ' : '' ) }>Events</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
