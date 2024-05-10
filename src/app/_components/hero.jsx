
const Hero = ({}) => {
  
  return (
    <div className="flex justify-center items-center text-[20px] font-[600] w-full h-full">
      <div className="w-[500px] bg-[#6B6867] opacity-80 py-8 text-white rounded-2xl shadow-2xl  gap-y-3 max-md:h-[450px]">
        <section
          className="w-full flex flex-col justify-center items-center h-full"
        >
          <h1 className="mb-5 text-[22px] underline underline-offset-4 max-sm:mb-0">Hours</h1>
          <ul className="w-full flex flex-col justify-center items-center h-full font-[600] px-[30px] mb-5 max-sm:px-[10px]">
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Monday</div>  5pm – 9pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Tuesday</div> 3pm – 10pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Wednesday</div> 3pm – 10pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Thursday</div>3pm – 10pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Friday</div>12pm – 10pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Saturday</div>12pm – 10pm</li>
            <li className="flex text-white max-sm:text-[16px]"><div className="w-[180px] max-sm:w-[120px]">Sunday</div>12pm – 8pm</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Hero
