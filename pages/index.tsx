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
              staggerChildren: 0.1, //apply stagger on the parent tag
          },
      },
  };

  const listVariant = {
      hidden: {
          scale: 0, //move out of the site
          opacity: 0,
      },
      visible: {
          scale: 1, // bring it back to nrmal
          opacity: 1,
      },
  };
  return (
      <motion.section
        variants={boxVariant}
        animate="visible"
        initial="hidden"
        className="h-screen grid lg:grid-flow-col px-24 lg:py-0 py-32 lg:place-content-center lg:gap-16"
      >
          <motion.div className='relative ' variants={listVariant}>
            <Link href={'#'} className='text-2xl text-orange-500 transition font-bold'>Studio HR.</Link>
          </motion.div>
          <motion.div className='relative' variants={listVariant}>
            <Link href={'/about'} className='text-2xl transition-all hover:font-bold  hover:animate-pulse hover:px-10'>About</Link>
          </motion.div>
          <motion.div className='relative ' variants={listVariant}>
            <Link href={'/work'} className='text-2xl transition-all hover:font-bold  hover:animate-pulse hover:px-10'>Work</Link>
          </motion.div>
          <motion.div className='relative ' variants={listVariant}>
            <Link href={'/services'} className='text-2xl transition-all hover:font-bold  hover:animate-pulse hover:px-10'>Services</Link>
          </motion.div>
          <motion.div className='relative ' variants={listVariant}>
            <Link href={'/gallery'} className='text-2xl transition-all hover:font-bold  hover:animate-pulse hover:px-10'>Gallery</Link>
          </motion.div>
          <motion.div className='relative ' variants={listVariant}>
            <Link href={'/contact'} className='text-2xl transition-all hover:font-bold  hover:animate-pulse hover:px-10'>Contact</Link>
          </motion.div>

      </motion.section>

  )
}

export default Home
