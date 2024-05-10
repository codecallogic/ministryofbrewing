"use client"
import Image from "next/image";
import SVG from '@/app/_libs/svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useCookies } from "react-cookie"
import { useMutation, useQuery } from '@apollo/client'
import { founders } from "../_constants";

//// COMPONENTS
import Nav from '@/app/_components/nav'
import Footer from '@/app/_components/footer'
import Hero from '@/app/_components/_events/hero'

///// QUERIES AND MUTATIONS
import GET_BEERS from '@/app/_queries/fetchBeers'

const Beers = ({}) => {
  
  const [width, height]                       = useWindowSize()
  const [windowWidth, setWindowWidth]         = useState()

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
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[400px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/aboutpage.jpeg')" : "url('/assets/aboutpage.jpeg')" }}
      >
      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-sm:px-[20px]"
      >
        <h1 className="text-[32px] font-[600] text-black uppercase mt-[40px]">Our Mission</h1>
        <div>We are humbled to base our operations in the former St. Michael’s Church and proud to be revitalizing a historic community gathering place. Our team brings together experienced industry professionals resulting in beer, food, and ambiance that will elevate your senses.</div>
        <div>Another part of our mission is to give back to the people around us.  To make this happen we are focused on three core values:</div>
        <div className="font-[600]">Education, Community, and Philanthropy</div>
      </section>
      <section
        className="flex justify-center flex-col items-center px-[200px] gap-y-3 text-center max-sm:px-[20px]"
      >
        <div className="border-b-[1px] border-grey py-10">
          <h1 className="text-[24px] font-[600] text-schemefive uppercase py-3">Education</h1>
          <div>We believe hope lives in learning and education.  By providing this to under-served communities, we seek to enable opportunities that may not otherwise exist.   Specifically, founding members Ernst Valery and David Wendell are working to create a summer course hosted within the Ministry of Brewing QC lab that teaches lab skills to high school seniors from the City of Baltimore to help prepare them for future jobs in research or industry where molecular biology skills are needed and valued.</div>
        </div>
      </section>
      <section
        className="flex justify-center flex-col items-center px-[200px] gap-y-3 text-center max-sm:px-[20px]"
      >
        <div className="border-b-[1px] border-grey py-10">
          <h1 className="text-[24px] font-[600] text-schemefive uppercase py-3">Community</h1>
          <div>Our location in the former St. Michael’s church has a storied history as a hub of community gathering and engagement.  Many Baltimore residents remember attending church services, christenings, and marriages at St. Michael’s, and we intend to respect this past by maintaining the essence of a local family gathering place for the adjacent communities (Washington Hill, Upper Fells, and Butcher’s Hill) as well as the greater Baltimore-area through regular public and private events like meetings, weddings, holiday parties, and fundraisers.</div>
        </div>
      </section>
      <section
        className="flex justify-center flex-col items-center px-[200px] gap-y-3 text-center max-sm:px-[20px]"
      >
        <div className="border-b-[1px] border-grey py-10">
          <h1 className="text-[24px] font-[600] text-schemefive uppercase py-3">Philanthropy</h1>
          <div>Giving back to the community is a core, shared belief among the Ministry ‘s four founding members. We plan to bring this beyond a feel-good message through education and fundraising. Our brewery’s initial philanthropic efforts will focus on Baltimore’s public school system, working in conjunction with individual elementary schools to understand the most pressing needs of their students and teachers.  We will also welcome other fundraising work and invite you to reach out to us discuss your efforts at <span className="text-schemefive">contact@ministryofbrewing.com. </span></div>
        </div>
      </section>
      <section
        className="flex justify-center items-center py-5"
      >
        <div className="grid grid-cols-3 gap-x-5 gap-y-10 max-xl:grid-cols-2 max-md:grid-cols-1">
          {founders && founders.map((item, idx) => 
            <div 
              className="flex gap-x-5 w-[400px] h-[400px] max-sm:w-[300px]"
              key={idx}
            >
              <div className="w-[125px] h-[125px] rounded-full shadow-xl overflow-hidden max-sm:w-[75px] max-sm:h-[75px]">
                <img
                  className="w-full h-full object-cover"
                  src={item.image}
                >
                </img>
              </div>
              <div className="flex flex-col w-[225px]">
                <div className="text-[22px] font-[600]">{item.name}</div>
                <div className="text-[16px] font-[400] text-grey">{item.title}</div>
                <div className="text-[14px] font-[400]">{item.description.substring(0, 500)}</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        className="w-full flex justify-evenly items-start px-[200px] pt-[100px] pb-[50px] gap-x-3 max-md:flex-col max-xl:px-[100px] max-md:px-[50px] max-md:gap-y-5"
      >
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/abouticonone.png"
              width={80}
              height={80}
              alt="About one"
            />
          </div>
          <div className="font-[600] uppercase py-3">Events</div>
          <div>Check out our upcoming events – or inquire about having your next hangout in our taproom. For events please email us at <a className="underline underline-offset-8">events@ministrybrewing.com</a> </div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/abouticontwo.png"
              width={80}
              height={80}
              alt="About two"
            />
          </div>
          <div className="font-[600] uppercase py-3">Location</div>
          <div>Find us in the former St. Michael’s Church in the Washington Hill/Upper Fells Point-area
          1900 E. Lombard St, Baltimore, MD 21231</div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center h-[80px]">
            <Image
              src="/assets/abouticonthree.png"
              width={80}
              height={80}
              alt="About three"
            />
          </div>
          <div className="font-[600] uppercase py-3">Taprooms</div>
          <div>With 32 rotating taps and 53 foot barrel ceilings, a truly unique experience comes to Baltimore.</div>
        </div>
        <div className="w-1/4 flex justify-center flex-col text-center max-md:w-full">
          <div className="flex justify-center">
            <Image
              src="/assets/abouticonfour.png"
              width={80}
              height={80}
              alt="About four"
            />
          </div>
          <div className="font-[600] uppercase py-3">Sign Up</div>
          <div>Sign up now to receive info on brewery news, events, and beer releases!</div>
        </div>
      </section>
      <section className="px-[200px] max-lg:px-[100px] max-sm:px-[20px] mb-[50px]">
        <div className="flex flex-col gap-y-3">
          <h1 className="text-schemefive text-[22px] font-[600] uppercase">Location</h1>
          <h1 className="text-schemetwo text-[16px] font-[600] uppercase">Address</h1>
          <p>1900 E Lombard St @ S Wolfe St, Baltimore, MD 21231</p>
          <h1 className="text-schemetwo text-[16px] font-[600] uppercase">Contact</h1>
          <p>contact@ministryofbrewing.com</p>
          <p>(410) 624-5623</p>
          <h1 className="text-schemetwo text-[16px] font-[600] uppercase">Sales</h1>
          <p>sales@ministryofbrewing.com</p>
        </div>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default Beers

