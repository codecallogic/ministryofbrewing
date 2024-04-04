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
import Hero from '@/app/_components/_taproom/hero'

///// QUERIES AND MUTATIONS
import GET_BEERS from '@/app/_queries/fetchBeers'

const Taproom = ({}) => {
  
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
      <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[400px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/headerdraftlist.jpeg')" : "url('/assets/headerdraftlist.jpeg')" }}
      >

      </section>
      {/* <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[800px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/homeHeaderTwo.jpeg')" : "url('/assets/homeHeaderTwo.jpeg')" }}
      >
        <Hero />
      </section> */}
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-md:px-[20px]"
      >
        <h1 className="text-[24px] font-[600] text-schemefive uppercase">Current Draft List</h1>
        <div>Our tap list offers a little something for everyone. Our rotating taps feature classic lagers and IPAs as well as more unique, seasonal offerings. We also proudly feature a house cider and our own crafted sodas will be coming back soon. Check back often as our selection rotates frequently!</div>
      </section>
      <section
        className="flex justify-center items-center py-5"
      >
        <div className="grid grid-cols-2 max-lg:grid-cols-1">
          {beers && beers.map((item, idx) => 
            <div 
              className="flex gap-x-5 w-[400px] h-[200px] max-sm:w-[300px]"
              key={idx}
            >
              <div className="w-[150px] h-[150px] rounded-full shadow-xl max-sm:w-[100px] max-sm:h-[100px]">
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
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default Taproom

