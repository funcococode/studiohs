import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp, TbQuote } from "react-icons/tb";
import { navItemParentVariant, navItemVariant, parentVariant, childVariant } from '../helpers/animation'
import { useEffect } from "react";

const Services : NextPage = () => {
    return (
        <motion.section 
            initial = {{opacity: 0, x:-200}}
            animate = {{opacity: 1, x:0}}
            exit = {{opacity: 0, x:-200}}
            className="min-h-screen px-16 lg:px-24 ">
            <nav className="py-10 grid lg:grid-cols-2 items-center">
                <Link href={'/'} className="cursor-pointer col-span-1 p-2 px-5 w-fit gap-6 items-center rounded-xl grid grid-flow-col place-items-center hover:bg-black hover:text-white -translate-x-1/2 text-lg">
                    <TbArrowBackUp />
                    Home
                </Link>
                <motion.ul 
                    variants={navItemParentVariant}
                    animate="visible"
                    initial="hidden" 
                    className="w-full flex gap-5 justify-between md:justify-end lg:mt-0 mt-16"
                >
                    <motion.div className='relative' variants={navItemVariant}>
                        <Link href={'/about'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>About</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/work'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Work</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/gallery'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Gallery</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/contact'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Contact</Link>
                    </motion.div>
                </motion.ul>
            </nav>
            <main className="relative">
                <motion.h1
                    variants={parentVariant}
                    animate="visible"
                    initial="hidden"
                    className="lg:text-9xl mt-16 lg:mt-0 text-5xl font-thin lg:text-center">
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">Awesome</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">things</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">we</motion.span><br />
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">can</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">do</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">for</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-normal mr-4">you</motion.span>
                </motion.h1>
                <motion.p initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 1}} className="lg:text-center mt-16 lg:mt-24 lg:px-56 lg:py-10 text-4xl text-gray-500 font-thin">
                    From turning your ideas into reality, to helping you grow your business, we can help you with all of your business needs. We provide a wide range of services, starting from compositions to the mixing & mastering and BGM.
                </motion.p>

                <p className="lg:text-8xl text-6xl w-2/3 lg:w-1/2 lg:font-thin font-regular mt-32 mb-24">Here are some services that we provide</p>

                <section className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <h1 className='text-lg text-gray-600'>Music Production</h1>
                    <div>
                        <h1 className="lg:text-6xl text-5xl">Experience Professional-Quality Music Production with Our Studio Services</h1>
                        <h4 className="text-xl font-medium mt-20 mb-5">Produce Your Next Hit with Studio HR</h4>
                        <p className="text-gray-500">
                            Our experienced team will work with you every step of the way to ensure a polished, professional sound that meets your needs.
                        </p>
                    </div>
                </section>
                <section className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <h1 className='text-lg text-gray-600'>Mixing & Mastering</h1>
                    <div>
                        <h1 className="lg:text-6xl text-5xl">Master Your Music to Perfection with Our Precision Mixing and Mastering Services</h1>
                        <h4 className="text-xl font-medium mt-20 mb-5">Polish Your Sound to Perfection with Studio HR</h4>
                        <p className="text-gray-500">
                            Our mix engineers will help you achieve a polished, professional sound that stands out from the crowd.
                        </p>
                    </div>
                </section>
                <section className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <h1 className='text-lg text-gray-600'>Audio Recording</h1>
                    <div>
                        <h1 className="lg:text-6xl text-5xl">Record Your Music with Uncompromising Quality </h1>
                        <h4 className="text-xl font-medium mt-20 mb-5">Make Your Music Dreams a Reality </h4>
                        <p className="text-gray-500">
                            From demo tracks to full-length albums, we have the expertise and equipment to help you create the perfect recording.
                        </p>
                    </div>
                </section>
            </main>
        </motion.section>
    )
}
export default Services;