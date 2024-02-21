"use client"

//// COMPONENTS
import Nav from '@/app/_components/nav'

export default function Layout({
  children, // will be a page or nested layout
}) {
  return (
    <>
      <main className="relative">
        <Nav/>
      </main>
      {children}
    </>
  )
}
