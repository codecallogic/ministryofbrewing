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
import Hero from '@/app/_components/_events/hero'

///// QUERIES AND MUTATIONS
import GET_BEERS from '@/app/_queries/fetchBeers'

const Beers = ({}) => {
  
  const [width, height]                       = useWindowSize()
  const [windowWidth, setWindowWidth]         = useState()
  const [beers, setBeers]                     = useState([])

  //// DATA
  const dataBeers                             = useQuery(GET_BEERS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  //// REFETCH
  const { refetch: refetchBeers  }            = useQuery(GET_BEERS, { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI' })

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(width)
  }, [width])

    //// LISTS
    useEffect(() => {
      if(dataBeers.data) setBeers(dataBeers.data.allBeers)
    }, [dataBeers])
  
  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      {/* <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[800px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/homeHeaderTwo.jpeg')" : "url('/assets/homeHeaderTwo.jpeg')" }}
      >
        <Hero />
      </section> */}
      <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[400px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/homeHeaderThree.jpeg')" : "url('/assets/homeHeaderThree.jpeg')" }}
      >

      </section>
      <section
        className="flex justify-center py-[50px] flex-col items-center px-[200px] max-lg:px-[50px] gap-y-3 text-center"
      >
        <div>This page includes beers both past and present. Our selection is always rotating.</div>
        <div>Check the taproom page, or the draft list on the homepage, for updated info on beers we are currently pouring.</div>
      </section>
      <section
        className="flex justify-center items-center py-5"
      >
        <div className="grid grid-cols-3 gap-x-5 max-xl:grid-cols-2 max-lg:grid-cols-1">
          {beers && beers.map((item, idx) => 
            item.beerList &&
            <div 
              className="flex gap-x-5 w-[400px] h-[200px] max-sm:w-[300px]"
              key={idx}
            >
              <div className="w-[125px] h-[125px] rounded-full shadow-xl max-sm:w-[75px] max-sm:h-[75px]">
                <img
                  className="w-full h-full bg-cover rounded-full"
                  src={item.images[0] ? `${item.images[0].url}` : 'https://via.placeholder.com/300'}
                >
                </img>
              </div>
              <div className="flex flex-col">
                <div className="text-[22px] font-[600] capitalize">{item.name}</div>
                <div><span className="font-[600]">ABV: </span>{item.abv}</div>
                <div><span className="font-[600]">Style: </span>{item.style}</div>
              </div>
            </div>
          )}
        </div>
      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-md:px-[20px]"
      >
        <h1 className="text-[24px] font-[600] text-schemefive capitalize">Ministry Beers may also be found at local restaurants, bars and liquor stores.</h1>
        <div>Want Ministry on tap or in cans at your bar restaurant, or liquor store? Email us at <span className="text-schemefour font-[600]">sales@ministryofbrewing.com</span>. </div>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default Beers

