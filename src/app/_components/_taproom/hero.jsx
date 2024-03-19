
const Hero = ({}) => {
  
  return (
    <div className="flex justify-center items-center text-[24px] font-[600] w-full h-full">
      <div className="w-[800px] h-[400px] bg-[#6B6867] opacity-80 p-10 flex justify-start flex-col text-center text-white gap-y-3 max-lg:w-[600px] max-md:h-[500px]">
        <h1 className="uppercase text-[42px] font-[600]">Taproom</h1>
        <p className="text-[18px] font-[400]">Located in the newly restored St. Michael’s Church, Ministry of Brewing aims to regain the location’s status of a community meeting place.</p>
        <p className="text-[18px] font-[400]">We welcome all to enjoy our unique beers, sodas and cider.</p>
        <h1 className="uppercase text-[28px] font-[600]">Hours</h1>
        <ul className="w-full flex items-center flex-col font-[600] py-[5px] px-[20px] text-[14px] max-sm:px-[2px]">
          <li className="flex text-white"><div className="w-[200px] max-sm:w-[150px]">Monday</div>  5pm – 9pm</li>
          <li className="flex text-white"><div className="w-[200px] max-sm:w-[150px]">Tuesday - Thursday</div> 3pm – 10pm</li>
          <li className="flex text-white"><div className="w-[200px] max-sm:w-[150px]">Friday, Saturday</div>12pm – 10pm</li>
          <li className="flex text-white"><div className="w-[200px] max-sm:w-[150px]">Sunday</div>12pm – 8pm</li>
        </ul>
      </div>
    </div>
  )
}

export default Hero
