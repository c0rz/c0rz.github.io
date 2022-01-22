import Head from 'next/head'
import Navbar from '../components/navbar'
import Banner from '../components/banner'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home - Cornelius</title>
            </Head>
            <Navbar />
            <Banner />
        </div>
    )
}