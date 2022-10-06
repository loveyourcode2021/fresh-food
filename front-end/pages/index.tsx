import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header/header'


const Home: NextPage = () => {
  return (
    <>
    <Header />
    <main>
      this is main
    </main>
    <Footer />
    </>
  )
}

export default Home
