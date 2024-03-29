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
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[400px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/headerdraftlist.jpeg')" : "url('/assets/headerdraftlist.jpeg')" }}
      >

      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[100px] gap-y-3 text-center max-md:px-[20px] bg-white"
      >
        <h1 className="text-[24px] font-[600] text-schemefive uppercase">Non Beer List</h1>
        <h1 className="text-[18px] text-black font-[600]">HARD CIDER  abv | $ | size</h1>
        <p>The Gang Makes a Cider (draft) semi-sweet hard cider, made on site. 6.8% $7 – 16oz draft</p>
        <p>Downeast Original (draft) unfiltered, sweet hard cider. 5.1% $7.25 – 16oz draft</p>
        <p>Chesapeake Blackberry dry, fruited cider made in baltimore. 5.0% $6 – 12oz can</p>
        <p>Ace Perry light, refreshing pear cider. 5.0% $6.5 – 12oz can</p>
        <p>Hudson North salted watermelon cider. 5.0% $7.5 – 16oz can</p>
        <p>Austin Rosé light cider w/ hibiscus & rose petals. 5% $6.25 – 12oz can</p>
        <p>Capitol Cuvee ultra-crisp cider. 6.9% $7.25 – 12oz can</p>
        <h1 className="text-[18px] text-black font-[600]">HARD KOMBUCHA  abv | $ | size</h1>
        <p>Juneshine blood orange mint hard kombucha. 6% $7 – 12oz can</p>
        <p>Flying Embers pineapple sunset hard kombucha. 8% $7.25 – 12oz can</p>
        <h1 className="text-[18px] text-black font-[600]">NON-ALCOHOLIC  abv | $ | size</h1>
        <p>Partake Pale Ale non-alcoholic pale ale. 0 sugars, 0 carbs. $4.75 – 12oz can</p>
        <p>Big Drop Paradiso non-alcoholic citra ipa. 61 calories. $4.75 – 12oz can</p>
        <p>Lagunitas Hop Refresher citrus seltzer. zero sugar. $2.75 – 12oz can</p>
        <p>Olipop Sodas low-sugar sodas. selection varies. $4.15 – 12oz can</p>
        <h1 className="text-[18px] text-black font-[600]">SNACKIES</h1>
        <p>Route 11 Chips selection varies. $2.15 – 2oz</p>
        <p>Peanut Shoppe Peanuts salted or old bay. $4.25 – 1/3 lb</p>
        <p>Peanut Shoppe Cashews butter toffee coated. $6.25 – 1/3 lb</p>
        <p>Peanut Shoppe Mixed Nuts cashews, pecans, almonds, & more. $6.25 – 1/3 lb</p>
        <p>Pop Daddy Popcorn white cheddar popcorn. $4 – 2oz</p>
        <p>Pop Daddy Pretzels cinnamon sugar or yellow mustard. $4 – 2oz</p>
        <p>Righteous Felon Craft Jerky teriyaki, chesapeake crab or O.G. hickory. $7.25 – 2oz</p>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default BeerList

