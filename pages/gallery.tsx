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
            className="min-h-screen px-16">
            <nav className="grid lg:grid-cols-2 items-center py-16">
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
            <main className="grid grid-cols-2 gap-5 mb-16">
                <div className="relative flex gap-x-5">
                    <div className="flex-1 hover:flex-[2] overflow-hidden transition-all">
                        <img src="imgs/studio 1.jpg" className="object-cover w-[600px] h-[600px] hover:scale-110 transition-all"/>
                    </div>
                    <div className="flex-1 hover:flex-[2] transition-all overflow-hidden">
                        <img src="imgs/studio 2.jpg" className="object-cover w-[600px] h-[600px] hover:scale-110 transition-all"/>
                    </div>
                </div>
                <div className="relative flex gap-x-5">
                    <div className="flex-1 hover:flex-[2] overflow-hidden transition-all">
                        <img src="imgs/studio 3.jpg" className="object-cover w-[600px] h-[600px] hover:scale-110 transition-all"/>
                    </div>
                    <div className="flex-1 hover:flex-[2] transition-all overflow-hidden">
                        <img src="imgs/studio 4.jpg" className="object-cover w-[600px] h-[600px] hover:scale-110 transition-all"/>
                    </div>
                </div>
                <div className="relative grid grid-cols-2 gap-5 col-span-2">
                    <div className="transition-all overflow-hidden">
                        <img src="imgs/studio 5.jpg" className="object-cover w-full h-[600px] hover:scale-110 transition-all"/>
                    </div>
                    <div className="transition-all overflow-hidden">
                        <img src="imgs/studio 6.jpg" className="object-cover w-full h-[600px] hover:scale-110 transition-all"/>
                    </div>
                </div>
            </main>
        </motion.section>
    )
}

export default Gallery;