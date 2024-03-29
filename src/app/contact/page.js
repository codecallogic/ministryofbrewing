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

const Contact = ({}) => {
  
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
        className="flex justify-center py-5 flex-col text-center px-[50px] gap-y-3 max-md:px-[20px] mb-[100px]"
      >
        <h1 className="text-[24px] font-[600] text-schemefive uppercase mt-[150px]">Contact</h1>
        <h1 className="text-[18px] text-black font-[600]">Jobs</h1>
        <p>jon@ministryofbrewing.com</p>
        <h1 className="text-[18px] text-black font-[600]">Information</h1>
        <p className="text-schemefive">contact@ministryofbrewing.com </p>
        <h1 className="text-[18px] text-black font-[600]">Sales</h1>
        <p className="text-schemefive">sales@ministryofbrewing.com</p>
        <h1 className="text-[18px] text-black font-[600]">Newsletter</h1>
        <p>Sign up to receive our newsletter <span onClick={() => window.location.href = 'https://mailchi.mp/25af3b8a5397/ministryofbrewingcongregation'} className="text-schemefive hover:cursor-pointer">here</span></p>
        <h1 className="text-[18px] text-black font-[600]">Event Queries</h1>
        <p>Please complete this form for <span onClick={() => window.location.href = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScRC3A0UTM29_1ek2H3xDPYJ2pR6cXx1YX7Pq9dQcQswDrNZw/closedform'} className="text-schemefive hover:cursor-pointer">private events</span></p>
        <h1 className="text-[18px] text-black font-[600]">Phone</h1>
        <p className="text-schemefive">410-624-5623</p>
      </section>
      <main className="relative">
        <Footer />
      </main>
    </>
  );
}

export default Contact

