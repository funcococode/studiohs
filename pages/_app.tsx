import { AnimatePresence } from 'framer-motion'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useRef } from 'react'

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const blob = document.getElementById('blob');
    document.addEventListener('mousemove',(e) => {
      let {clientX, clientY} = e;
      if(blob){
        blob.animate({
          left : `${clientX}px`,
          top : `${clientY}px`,
        },{
          duration : 3000,
          fill : 'forwards'
        })
      }
    })
  },[])

  return (
    <div className='relative '>
      <div id="blob" className='rounded-full bg-gradient-to-r from-rose-400 to-blue-500'></div>
      <div className='fixed inset-0 backdrop-blur-3xl z-0 min-h-screen'></div>
      <AnimatePresence mode='wait'>
        <Component {...pageProps} key={router.asPath}/>
      </AnimatePresence>
    </div>
  )
}

export default MyApp
