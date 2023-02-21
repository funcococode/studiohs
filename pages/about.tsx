import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { TbArrowBackUp, TbArrowRightBar, TbQuote } from "react-icons/tb";
import { navItemParentVariant, navItemVariant, parentVariant, childVariant } from '../helpers/animation'

const About : NextPage = () => {
    return (
        <motion.section 
            initial = {{opacity: 0, x:-200}}
            animate = {{opacity: 1, x:0}}
            exit = {{opacity: 0, x:-200}}
            className="min-h-screen px-16 ">
            <nav className="py-10 grid lg:grid-cols-2 items-center">
                <Link href={'/'} className="cursor-pointer col-span-1 p-2 px-5 w-fit gap-6 items-center rounded-xl grid grid-flow-col place-items-center hover:bg-black hover:text-white -translate-x-1/3 text-lg">
                    <TbArrowBackUp />
                    Home
                </Link>
                <motion.ul 
                    variants={navItemParentVariant}
                    animate="visible"
                    initial="hidden" 
                    className="w-full flex gap-5 justify-between md:justify-end lg:mt-0 mt-16"
                >
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/work'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Work</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/services'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Services</Link>
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
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">Bringing</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">your</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">sound</motion.span><br />
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">to</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">life,</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-normal mr-4">elevating</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">your</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-normal mr-4">creativity</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-thin mr-4">and</motion.span>
                    <motion.span variants={childVariant} className="inline-block font-normal mr-4">success</motion.span>
                </motion.h1>
                <motion.p initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{delay: 1}} className="lg:text-center mt-16 lg:mt-24 lg:px-56 lg:py-10 text-4xl text-gray-500 font-thin">
                    Maximizing the potential of your audio with personalized, innovative, and expert solutions, from composition to campaigns and beyond, crafting audio experiences that truly stand out.
                </motion.p>

                <motion.p initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="lg:text-8xl text-5xl w-1/2 font-thin mt-32 mb-24">What are our thoughts</motion.p>

                <motion.blockquote initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="italic text-xl lg:text-5xl">
                    <TbQuote className="rotate-180 float-left mr-10"/>
                        As a Creative Audio Agency,
                        our solutions are all part of one ecosystem,
                        bringing production, corporates and artists all into one mix.
                        You need creative solutions to
                        enhance your artist / brand image,
                        but you also need people to listen.
                        This is where we come in. We have a team of professionals from major radio stations,
                        podcast creators, bollywood music producers , sound designers & mastering engineers
                        to get your artist’s / brand’s voice exactly where it needs to be. It’s vital to get your voice & ideas heard, and we’ll make it happen for you.
                    <TbQuote className="float-right"/>
                </motion.blockquote>

                <motion.p initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="text-8xl w-1/2 font-thin my-64">Here is why you should choose us</motion.p>

                <motion.section initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <motion.h1 className='text-lg text-gray-600'>Experienced team</motion.h1>
                    <motion.div>
                        <motion.h4 className="text-3xl font-medium">Our team of experienced music producers, composers, engineers, and musicians are dedicated to bringing your creative vision to life</motion.h4>
                    </motion.div>
                </motion.section>
                <motion.section initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <motion.h1 className='text-lg text-gray-600'>State-of-the-art equipment</motion.h1>
                    <motion.div>
                        <motion.h4 className="text-3xl font-medium">We use only the highest-quality recording and production equipment to ensure the best possible sound for your project.</motion.h4>
                    </motion.div>
                </motion.section>
                <motion.section initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <motion.h1 className='text-lg text-gray-600'>Customized approach</motion.h1>
                    <motion.div>
                        <motion.h4 className="text-3xl font-medium">Every project is unique, and we understand that. We take a personalized approach to each client, ensuring that every aspect of your project is tailored to your specific needs.</motion.h4>
                    </motion.div>
                </motion.section>
                <motion.section initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <motion.h1 className='text-lg text-gray-600'>Competitive pricing</motion.h1>
                    <motion.div>
                        <motion.h4 className="text-3xl font-medium">We offer competitive pricing for all of our services without sacrificing quality, making our services accessible to everyone.</motion.h4>
                    </motion.div>
                </motion.section>
                <motion.section initial={{scale: 0.5, y: 50,opacity : 0}} whileInView={{scale: 1, y: 0, opacity:1}} transition={{delay: 0.25}} className="grid gap-5 lg:gap-0 lg:grid-cols-2 py-12 lg:py-24">
                    <motion.h1 className='text-lg text-gray-600'>Versatile services</motion.h1>
                    <motion.div>
                        <motion.h4 className="text-3xl font-medium">We offer a wide range of services, from music production and composition to podcast production and BGM and scores for short films and TV ads, making us a one-stop-shop for all your music production needs</motion.h4>
                    </motion.div>
                </motion.section>

            </main>
        </motion.section>
    )
}

export default About;