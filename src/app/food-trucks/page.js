"use client"
import Image from "next/image";
import SVG from '@/app/_libs/svg'
import { useEffect, useState } from 'react'
import { useWindowSize } from '@react-hook/window-size'
import { useCookies } from "react-cookie"
import { useMutation, useQuery } from '@apollo/client'

///// QUERIES
import GET_FOOD_TRUCKS from '@/app/_queries/fetchFoodTrucks'

//// COMPONENTS
import Nav from '@/app/_components/nav'
import Footer from '@/app/_components/footer'
import Hero from '@/app/_components/_taproom/hero'

const FoodTrucks = ({}) => {
  
  const [width, height]                       = useWindowSize()
  const [windowWidth, setWindowWidth]         = useState()
  const [foodTrucks, setFoodTrucks]           = useState([])

  //// DATA
  const dataFoodTrucks                        = useQuery(GET_FOOD_TRUCKS, { variables: { id: '109JF0SA9DUFJ0J3', token: 'DIFJAOSDIJFOSDIJFI'}})

  useEffect(() => {
    setWindowWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    setWindowWidth(width)
  }, [width])

  useEffect(() => {
    if(dataFoodTrucks.data) setFoodTrucks(dataFoodTrucks.data.allFoodTrucks)
  }, [dataFoodTrucks])
  
  return (
    <>
      <main className="relative">
        <Nav />
      </main>
      <section 
        className="xl:padding-l wide:padding-r padding-b shadow-lg bg-cover bg-center	bg-no-repeat h-[400px] shadows-2xl"
        style={{ backgroundImage: windowWidth < 765 ? "url('/assets/headerfoodtrucks.jpeg')" : "url('/assets/headerfoodtrucks.jpeg')" }}
      >
        {/* <Hero /> */}
      </section>
      <section
        className="flex justify-center py-5 flex-col items-center px-[200px] gap-y-3 text-center max-md:px-[20px] bg-white"
      >
        <h1 className="text-[24px] font-[600] text-schemefive uppercase">Food Trucks</h1>
        <div className="flex justify-center h-full">
          <img
            src={ foodTrucks[0] ? foodTrucks[0].images[0].url : `https://via.placeholder.com/300`}
            width={1000}
            height={400}
            alt="Food Trucks"
          />
        </div>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default FoodTrucks

