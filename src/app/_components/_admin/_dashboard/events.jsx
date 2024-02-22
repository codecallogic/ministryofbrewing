
import { useState } from "react"
import SVG from '@/app/_libs/svg'

const Events = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  events,
  editEvent,
  deleteEvent,
  refetch
}) => {
  
  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')

  const submitDeleteEvent = async (id) => {

    setLoading('deleteEvent')
    
    try {
      const response = await deleteEvent({
        variables: {
          id: id
        }
      })

      setLoading('')
      setMessage(response.data.deleteEvent.message)
      refetch()
      
    } catch (error) {
      console.log(error)
      window.scrollTo(0, 0);
      if(error) setMessage(error.message)
    }
  }
  
  return (
    <>
    <div className="flex justify-center">
      {message &&
        <div className="text-center py-3 bg-red w-[300px] mt-3 rounded-xl text-white font-[500] text-[16px] relative">
          <div 
            className="absolute top-[-5px] right-0 bg-white p-2 rounded-[50%] hover:cursor-pointer"
            onClick={() => setMessage('')}
          >
            <SVG
              svg={'close'}
              width={10}
              height={10}
              schemeOne={'#132A4A'}
            ></SVG>
          </div>
          {message}
        </div>
      }
    </div>
    <div 
      className="px-[60px] pt-[20px] flex items-center bg-white gap-x-3 hover:cursor-pointer"
      onClick={() => dispatch(changeView('dashboard'))}
    >
      <SVG
        svg={'arrowLeft'}
        width={20}
        height={20}
        schemeOne={'#132A4A'}
      ></SVG>
      <span>Go back</span>
    </div>
    <div className="px-[50px] pt-[20px] bg-white min-h-screen">
      <div className="flex items-center bg-schemetwo p-5 rounded-xl">
        <h1 className="text-[18px] font-poppins font-[600] text-white">All Events</h1>
      </div>
      <div className="mt-[40px] flex flex-col gap-y-4">
        { events && events.map((item, idx) => 
          <div 
            key={idx}
            className="w-full rounded-[20px] px-3 py-3 h-[200px] shadow-lg flex items-start gap-x-5 gap-y-2 max-xl:h-[100%] max-xl:items-start max-xl:justify-center max-xl:w-[100%] relative"
          >
            <h3 className="text-[18px] font-poppins font-[500] text-gol">
              <span>{item.name ? item.name : 'no name'}</span>
              <div className="flex flex-col items-start py-1">
                <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]">date: {item.date ? item.date : 'no date'}</div>
                <div className="ml-3 font-poppins text-[16px] font-[400] text-[#717579]" dangerouslySetInnerHTML={{ __html: item.description }}></div>
              </div>
            </h3>
            <div className="flex justify-rounded items-start gap-x-[50px] max-xl:flex-col max-xl:gap-y-5 max-xl:items-start">
              <div className="absolute top-3 right-5 hover:cursor-pointer">
                <div
                  onClick={() => dropdown == `${item.id}editInfo` ? setDropdown('') : setDropdown(`${item.id}editInfo`)}
                >
                  <SVG
                    svg={'gear'}
                    width={20}
                    height={20}
                    schemeOne={'#132A4A'}
                  ></SVG>
                </div>
                { dropdown == `${item.id}editInfo` &&
                  <div className="relative top-[100%] left-[-180px]">
                    <div className="absolute w-[200px] rounded-xl bg-slate-200">
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (dispatch(changePopup('newEvent')), dispatch(changeEdit('event')), dispatch(editEvent({ id: item.id, items: events}), setDropdown('')))}
                      >
                        Edit Event
                      </div>
                      <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (submitDeleteEvent(item.id), setDropdown(''))}
                      >
                        Delete
                      </div>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default Events
