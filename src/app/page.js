"use client"
import Image from "next/image";
import SVG from '@/app/_libs/svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'

//// COMPONENTS
import Nav from '@/app/_components/nav'
import Footer from '@/app/_components/footer'
import Hero from '@/app/_components/hero'

export default function Home() {

  const [width, height] = useWindowSize()
  const [windowWidth, setWindowWidth] = useState()

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(width)
  }, [width])
  
  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[800px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/homeHeaderThree.jpeg')" : "url('/assets/homeHeaderThree.jpeg')" }}
      >
        <Hero />
      </section>
      <section
        className="w-full flex justify-evenly items-start px-[200px] pt-[100px] pb-[50px] gap-x-3 max-md:flex-col max-md:px-[50px] max-md:gap-y-5"
      >
        <div 
          className="w-1/4 flex justify-center flex-col text-center max-md:w-full hover:cursor-pointer"
          onClick={() => window.location.href = '/food-trucks'}
        >
          <div className="flex justify-center h-[80px]">
            <SVG
              svg={'foodTruck'}
              alt="Food Truck"
              width={80}
              height={80}
              schemeOne={'#E14620'}
            />
          </div>
          <div className="font-[600] uppercase py-3">Food Trucks</div>
          <div>View the upcoming calendar to see what great, local food vendors will be dishing on site.</div>
        </div>
        <div 
          className="w-1/4 flex justify-center flex-col text-center max-md:w-full hover:cursor-pointer"
          onClick={() => window.location.href = '/taproom'}
        >
          <div className="flex justify-center h-[80px]">
            <SVG
              svg={'beer'}
              alt="Beer"
              width={80}
              height={80}
              schemeOne={'#E14620'}
            />
          </div>
          <div className="font-[600] uppercase py-3">Draft List</div>
          <div>Find the latest taproom offerings – including new seasonals and one-offs. And <span className="text-blue-500" onClick={(e) => (e.stopPropagation(), window.location.href = '/non-beer-list/')}>click here</span> for our current non-beer offerings.</div>
        </div>
        <div 
          className="w-1/4 flex justify-center flex-col text-center max-md:w-full hover:cursor-pointer"
          onClick={() => window.location.href = 'https://www.toasttab.com/ministry-of-brewing/giftcards?utmCampaign=onlineOrdering'}
        >
          <div className="flex justify-center h-[80px]">
            <SVG
              svg={'giftCard'}
              alt="Gift Card"
              width={80}
              height={80}
              schemeOne={'#E14620'}
            />
          </div>
          <div className="font-[600] uppercase py-3">Gift Cards</div>
          <div>A Ministry Digital Gift Card makes the best gift for any reason to celebrate.</div>
        </div>
        <div 
          className="w-1/4 flex justify-center flex-col text-center max-md:w-full hover:cursor-pointer"
          onClick={() => window.location.href = '/faq'}
        >
          <div className="flex justify-center">
            <SVG
              svg={'faq'}
              alt="FAQ"
              width={80}
              height={80}
              schemeOne={'#E14620'}
            />
          </div>
          <div className="font-[600] uppercase py-3">FAQ</div>
          <div>Have a question about the brewery? Check here to learn more about our history, visiting, and finding our products.</div>
        </div>
      </section>
      <section
        className="w-full flex justify-evenly items-start px-[200px] pt-[100px] pb-[50px] gap-x-3 max-md:flex-col max-md:px-[50px] max-md:gap-y-5"
      >
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/eventOne.png"
              width={80}
              height={80}
              alt="Event one"
            />
          </div>
          <div className="font-[600] uppercase py-3">Events</div>
          <div>Check out our upcoming events – or inquire about having your next hangout in our taproom.</div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/eventTwo.jpeg"
              width={80}
              height={80}
              alt="Event two"
            />
          </div>
          <div className="font-[600] uppercase py-3">Location</div>
          <div>Find us in the former St. Michael’s Church in the Washington Hill/Upper Fells Point-area
          1900 E. Lombard St, Baltimore, MD 21231</div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/eventThree.jpeg"
              width={80}
              height={80}
              alt="Event three"
            />
          </div>
          <div className="font-[600] uppercase py-3">Taprooms</div>
          <div>With 32 rotating taps and 53 foot barrel ceilings, a truly unique experience comes to Baltimore.</div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center">
            <Image
              src="/assets/eventFour.png"
              width={80}
              height={80}
              alt="Event four"
            />
          </div>
          <div className="font-[600] uppercase py-3">Sign Up</div>
          <div><span className="text-schemefive hover:cursor-pointer" onClick={() => window.location.href = 'https://mailchi.mp/25af3b8a5397/ministryofbrewingcongregation'}>Sign up now</span> to receive info on brewery news, events, and beer releases!</div>
        </div>
      </section>
  
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}
