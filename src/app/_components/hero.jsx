
const Hero = ({}) => {
  
  return (
    <div className="flex justify-center items-center text-[20px] font-[600] w-full h-full">
      <div className="w-[500px] h-[300px] bg-[#6B6867] opacity-80 py-8 flex justify-start flex-col text-center text-white rounded-xl shadow-2xl  gap-y-3 max-md:h-[450px]">
        <section
          className="w-full flex justify-center items-center"
        >
          <ul className="w-full flex flex-col justify-center items-center font-[600] px-[30px] max-sm:px-[50px]">
            <li className="flex text-white"><div className="w-[180px]">Monday</div>  5pm – 9pm</li>
            <li className="flex text-white"><div className="w-[180px]">Tuesday</div> 3pm – 10pm</li>
            <li className="flex text-white"><div className="w-[180px]">Wednesday</div> 3pm – 10pm</li>
            <li className="flex text-white"><div className="w-[180px]">Thursday</div>3pm – 10pm</li>
            <li className="flex text-white"><div className="w-[180px]">Friday</div>12pm – 10pm</li>
            <li className="flex text-white"><div className="w-[180px]">Saturday</div>12pm – 10pm</li>
            <li className="flex text-white"><div className="w-[180px]">Sunday</div>12pm – 8pm</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Hero
