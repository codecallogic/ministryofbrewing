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

const DraftList = ({}) => {
  
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
        <h1 className="text-[24px] font-[600] text-schemefive uppercase">Current Draft List</h1>
        <div className="flex justify-center h-full">
          <Image
            src="/assets/draftlist.jpg"
            width={1000}
            height={400}
            alt="Draft List"
          />
        </div>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default DraftList

