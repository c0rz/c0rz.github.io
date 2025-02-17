import '../styles/globals.css'
import "../styles.css"
import { useEffect } from 'react'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Check initial theme
    const theme = localStorage.getItem('theme') || 'light'
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <main className="pt-16">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
