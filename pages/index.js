import Head from 'next/head'
import Banner from '../components/banner'

export default function Home() {
    return (
        <div className="min-h-screen text-gray-900 dark:text-white">
            <Head>
                <title>Home - Cornelius</title>
                <meta name="description" content="Personal website of Cornelius S Alfredo" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Banner />
        </div>
    )
}