"use client"
import Image from "next/image";
import SVG from '@/app/_libs/svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useCookies } from "react-cookie"
import { useMutation, useQuery } from '@apollo/client'

//// COMPONENTS
import Nav from '@/app/_components/nav'
import Footer from '@/app/_components/footer'

const BeerList = ({}) => {
  
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
        className="flex justify-center py-[100px] flex-col px-[300px] gap-y-8 max-md:px-[20px] bg-white"
      >
        <div>
        <h1 className="text-[18px] text-black font-[600] mt-[150px]">What food trucks are available at the brewery?</h1>
        <p>We’re proud to feature some of the best and most exciting food trucks in the local area on site. You will commonly see updates on our instagram (@ministryofbrewing) and you can find the full calendar by clicking on the link on our homepage.</p>
        <p>If you are a food truck operator, and you are interested in serving at the brewery, send us a message at <span className="text-schemefive">sales@ministryofbrewing.com</span>.</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">Can my underage kids come to the brewery?</h1>
        <p>Of course! Ministry is family friendly during all business hours. We even have a rotating selection of craft sodas to choose from. We do ask that you keep all kids under supervision at all times.</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">Can we bring outside food?</h1>
        <p>Light outside food, snacks, and kids food is permitted. Catering, sandwich trays, pizza boxes, and other large food orders may be permitted on a case to case basis. Please speak to management for more details. We kindly ask that you keep your food on your table only, and please clean up after yourself.</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">Can we bring outside beverages?</h1>
        <p>With the exception of clear water bottles, outside beverages are not permitted.</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">Can we bring in a bottle of wine?</h1>
        <p>Absolutely no outside alcohol is permitted. Violators of this rule will have all alcoholic beverages confiscated and will be asked to leave. (This violation puts our liquor license at risk. We take this very seriously.)</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">Can we bring in decorations for a group gathering?</h1>
        <p>All decorations (including table clothes, signage, etc.) must be pre-approved by our event management team. Reach out to them here; <span className="text-schemefive">events@ministryofbrewing.com</span></p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">What time do you close?</h1>
        <p>Our hours are posted on our website and all social media accounts. We do have an agreement with our neighbors to close by 10pm on a nightly basis. </p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">I think the bartender still has my credit card?</h1>
        <p>We do not keep cards on file. When you start a tab, you’ll get your card right back. (If you do think you left something behind, give us a shout at 410-624-5623.)</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">When did the brewery open?</h1>
        <p>The brewery opened its doors for the first time in late January of 2020, following major rehab and construction work on the existing structure.</p>
        </div>
        <div>
        <h1 className="text-[18px] text-black font-[600]">What was the history of the church?</h1>
        <p>Our home is the former St Michael’s the Archangel Catholic Church. It spent time as a German Catholic church prior to hosting Spanish speaking services for the last decade it was open. The church officially closed and was desanctified in 2010.</p>
        </div>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default BeerList

