import Navbar from "./Navbar"
import Footer from "./Footer"
import { ReactNode } from "react"

import Head from "next/head"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return(
    <>
    <Head>
      <link rel="shortcut icon" href="/images/favicon.ico" />
      <title>PokeNext</title>
    </Head>
      <Navbar />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  )
}