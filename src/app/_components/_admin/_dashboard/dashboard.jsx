
import SVG from '@/app/_libs/svg'

const Dashboard = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  resetBeer,
  resetEvent,
  beers,
  events
}) => {
  
  return (
    <div className="w-full bg-white h-screen">
      <div className="px-[50px] py-[20px]">
        <div className="flex gap-x-[38px] flex-wrap">
          <div className="w-[48%] bg-gradient-to-r from-schemetwo from-[10%] via-schemethree via-[55%] to-schemefour h-[384px] rounded-[20px] shadow-xl  p-[50px] flex">
            <div className="w-[50%] flex flex-col">
              <h1 className="text-[32px] font-[900] font-poppins text-white">
                Manage your project in one touch
              </h1>
              <h2 className="text-[16px] font-[700] font-poppins text-white py-[15px]">
                Manage your project with the best system
              </h2>
            </div>
            <div className="w-[50%] h-full">
              <SVG
                svg={'analytics'}
                width={10}
                height={101}
                dataOne={10}
                dataTwo={40}
                dataThree={24}
                backgroundColor={'#EEEEEE'}
                schemeOne={'#D94919'}
              >
              </SVG>
            </div>
          </div>
          <div className="w-[48%] flex flex-wrap gap-x-[38px]">
            <div className="w-[100%] flex flex-wrap gap-x-[38px]">
              <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
                <div className="flex w-full">
                  <div className="w-[60%] flex flex-col">
                    <h1 className="text-[32px] font-poppins font-[900]">{beers.length > 0 ? beers.length : '0'}</h1>
                    <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Beers</h2>
                    <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                  </div>
                  <div className="w-[40%] flex flex-col items-center">
                    <div 
                      className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                      onClick={() => (dispatch(changePopup('newBeer'), dispatch(changeEdit('')), dispatch(resetBeer())))}
                    >
                      <SVG
                        svg={'plus'}
                        width={48}
                        height={48}
                        schemeOne={'#09BD3C'}
                      >
                      </SVG>
                    </div>
                    <h1 className="text-[14px] font-poppins font-[400] mt-5">New Beer</h1>
                    <h1 
                      className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                      onClick={() => dispatch(changeView('beers'))}
                    >
                      view all
                    </h1>
                  </div>
                </div>
              </div>
              <div className="w-[45%] h-[172px] rounded-[20px] shadow-xl flex p-[30px]">
                <div className="flex w-full">
                  <div className="w-[60%] flex flex-col">
                    <h1 className="text-[32px] font-poppins font-[900]">{events.length > 0 ? events.length : '0'}</h1>
                    <h2 className="pt-[5px] text-[18px] font-poppins font-[500]">Total Events</h2>
                    <div className="text-[16px] font-[400] font-poppins pt-[10px] text-grey"></div>
                  </div>
                  <div className="w-[40%] flex flex-col items-center">
                    <div 
                      className="hover:cursor-pointer transition-all ease-linear hover:translate-y-1"
                      onClick={() => (dispatch(changePopup('newEvent'), dispatch(changeEdit('')), dispatch(resetEvent())))}
                    >
                      <SVG
                        svg={'plus'}
                        width={48}
                        height={48}
                        schemeOne={'#09BD3C'}
                      >
                      </SVG>
                    </div>
                    <h1 className="text-[14px] font-poppins font-[400] mt-5">New Event</h1>
                    <h1 
                      className="text-[16px] font-poppins font-[400] underline text-blue-400 hover:cursor-pointer"
                      onClick={() => dispatch(changeView('events'))}
                    >
                      view all
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
