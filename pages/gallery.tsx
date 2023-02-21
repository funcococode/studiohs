import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import { navItemParentVariant, navItemVariant } from "../helpers/animation";

const Gallery : NextPage = () => {
    
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
                        <Link href={'/about'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>About</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/work'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Work</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/services'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Services</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/contact'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Contact</Link>
                    </motion.div>
                </motion.ul>

                
            </nav>
            <main className="relative">
               

            </main>
        </motion.section>
    )
}

export default Gallery;