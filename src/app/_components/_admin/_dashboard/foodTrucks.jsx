
import { useState } from "react"
import SVG from '@/app/_libs/svg'

const FoodTrucks = ({
  dispatch,
  changeView,
  changePopup,
  changeEdit,
  foodTrucks,
  editFoodTruck,
  deleteFoodTruck,
  refetch
}) => {
  
  const [dropdown, setDropdown] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')

  // const submitDeleteFoodTruck = async (id) => {

  //   setLoading('deleteFoodTruck')
    
  //   try {
  //     const response = await deleteFoodTruck({
  //       variables: {
  //         id: id
  //       }
  //     })

  //     setLoading('')
  //     setMessage(response.data.deleteFoodTruck.message)
  //     refetch()
      
  //   } catch (error) {
  //     console.log(error)
  //     window.scrollTo(0, 0);
  //     if(error) setMessage(error.message)
  //   }
  // }
  
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
      className="px-[60px] pt-[20px] flex items-center bg-white gap-x-3 hover:cursor-pointer text-black"
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
        <h1 className="text-[18px] font-poppins font-[600] text-white">All Food Trucks</h1>
      </div>
      <div className="mt-[40px] flex flex-col gap-y-4">
        { foodTrucks && foodTrucks.map((item, idx) => 
          <div 
            key={idx}
            className="w-full rounded-[20px] px-3 py-3 h-[200px] shadow-lg flex items-start gap-x-5 gap-y-2 max-xl:h-[100%] max-xl:items-start max-xl:justify-center max-xl:w-[100%] relative"
          >
            <h3 className="text-[18px] font-poppins font-[500] text-gol">
              <div className="w-[230px] h-[150px]">
                {item.images.length > 0 && 
                  <img 
                    className="w-full h-full bg-cover rounded-lg"
                    src={item.images[0].url} 
                    alt="" 
                  />
                }
                {!item.images.length && 
                  <img 
                    className="w-full h-full bg-cover rounded-lg"
                    src='https://via.placeholder.com/300' 
                    alt="" 
                  />
                }
              </div>
            </h3>
            <h3 className="text-[18px] font-poppins font-[500] text-black overflow overflow-y-auto">
              <span>{item.name ? item.name : 'no name'}</span>
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
                    <div className="absolute w-[200px] rounded-xl bg-slate-200 text-black">
                      <div 
                        className="p-2 hover:bg-gold rounded-xl "
                        onClick={(e) => (dispatch(changePopup('newFoodTruck')), dispatch(changeEdit('foodTruck')), dispatch(editFoodTruck({ id: item.id, items: foodTrucks}), setDropdown('')))}
                      >
                        Edit Food Truck
                      </div>
                      {/* <div 
                        className="p-2 hover:bg-gold rounded-xl hover:text-white"
                        onClick={(e) => (submitDeleteFoodTruck(item.id), setDropdown(''))}
                      >
                        Delete
                      </div> */}
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

export default FoodTrucks
