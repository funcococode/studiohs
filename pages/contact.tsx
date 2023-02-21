import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp, TbArrowUpRight } from "react-icons/tb";
import { navItemParentVariant, navItemVariant } from "../helpers/animation";

const Contact:NextPage = () => {
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
                        <Link href={'/gallery'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Gallery</Link>
                    </motion.div>
                    <motion.div className='relative ' variants={navItemVariant}>
                        <Link href={'/services'} className={`text-regular transition-all hover:font-bold  hover:animate-pulse hover:px-10`}>Services</Link>
                    </motion.div>
                </motion.ul>

                
            </nav>
            <main className="relative z-50 grid lg:grid-cols-2 items-center lg:py-16">
                <div>
                    <motion.h1 initial={{y: -100,opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.25}}  className="text-black font-regular text-6xl">
                        Love to hear from you, <br />
                        Get in touch 
                    </motion.h1>
                    <motion.p initial={{y: -100,opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5}} className="font-thin lg:w-2/3 mt-16 mb-16 lg:mb-0">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates officia eum blanditiis labore dolorum facere harum doloremque quos id est laudantium, quas quod. Vitae dolorem, voluptate fugiat quibusdam, sequi at placeat impedit consectetur amet molestias molestiae recusandae accusantium porro non cupiditate, possimus repellendus hic cumque laboriosam officia nisi! Ex, reiciendis.
                    </motion.p>
                </div>
                <form action="" className="grid gap-5">
                    <div className="grid lg:grid-cols-2 gap-10">
                        <div className="grid gap-4">
                            <label htmlFor="fullname">Your Name</label>
                            <input type="text" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" />
                        </div>
                        <div className="grid gap-4">
                            <label htmlFor="fullname">Your Email</label>
                            <input type="email" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-10 mt-5 lg:mt-0">
                        <div className="grid gap-4">
                            <label htmlFor="fullname">What are you interested in?</label>
                            <input type="text" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" />
                        </div>
                        <div className="grid gap-4">
                            <label htmlFor="fullname">Project Budget</label>
                            <input type="email" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-1 gap-10">
                        <div className="grid gap-4">
                            <label htmlFor="fullname">Message</label>
                            <textarea className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600 "></textarea>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-10">
                        <div className="grid gap-4">
                            <button className="bg-gray-800 text-white p-4 rounded flex items-center justify-between gap-5">Just Send <TbArrowUpRight /></button>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </form>
            </main>
        </motion.section>
    )
}

export default Contact;