import Head from 'next/head'
import Coupon from '@components/Coupon'
import Features from '@components/Features'
import Footer from '@components/Footer'
import Header from '@components/Header'
import Trees from '@components/Trees'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Olympic Christmas Trees in Rancho Cucamonga, CA</title>
      </Head>

      <main>
        <Header />
        <Features />
        <Coupon />
      </main>

      <Footer />
    </div>
  )
}
