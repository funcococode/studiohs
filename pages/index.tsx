import type { NextPage } from 'next'
import {AnimatePresence, motion} from 'framer-motion';
import {  } from 'react-icons/tb';
import Link from 'next/link';

const Home: NextPage = () => {
  const boxVariant = {
      hidden: {
          opacity: 0,
          x: -200, //move out of the site
      },
      visible: {
          opacity: 1,
          x: 0, //move out of the site
          transition: {
              when: "beforeChildren", //use this instead of delay
              staggerChildren: 0.05, //apply stagger on the parent tag
          },
      },
  };

  const listVariant = {
      hidden: {
          y:-20, //move out of the site
          opacity: 0,
      },
      visible: {
          y: 0, // bring it back to nrmal
          opacity: 1,
      },
  };
  return (
      <motion.section
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="grid lg:grid-cols-2 px-24 lg:py-0 py-32 items-center h-screen"
      >
        <div className='relative'>
          <motion.img src='imgs/StudioHR_LOGO.png' className='' variants={listVariant}/>
        </div>
        <div className='grid gap-4 justify-center'>
          <motion.div className='inline-flex items-center relative' variants={listVariant}>
            <Link href={'/about'} className='text-6xl font-thin text-gray-700 px-4 transition-all hover:text-white hover:scale-110 hover:animate-pulse'>About</Link>
          </motion.div>
          <motion.div className='inline-flex items-center relative ' variants={listVariant}>
            <Link href={'/work'} className='text-6xl font-thin text-gray-700 px-4 transition-all hover:text-white hover:scale-110 hover:animate-pulse'>Work</Link>
          </motion.div>
          <motion.div className='inline-flex items-center relative ' variants={listVariant}>
            <Link href={'/services'} className='text-6xl font-thin text-gray-700 px-4 transition-all hover:text-white hover:scale-110 hover:animate-pulse'>Services</Link>
          </motion.div>
          <motion.div className='inline-flex items-center relative ' variants={listVariant}>
            <Link href={'/gallery'} className='text-6xl font-thin text-gray-700 px-4 transition-all hover:text-white hover:scale-110 hover:animate-pulse'>Gallery</Link>
          </motion.div>
          <motion.div className='inline-flex items-center relative ' variants={listVariant}>
            <Link href={'/contact'} className='text-6xl font-thin text-gray-700 px-4 transition-all hover:text-white hover:scale-110 hover:animate-pulse'>Contact</Link>
          </motion.div>
        </div>

      </motion.section>

  )
}

export default Home
