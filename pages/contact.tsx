import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";

const Contact:NextPage = () => {
    return (
        <motion.section 
            initial = {{opacity: 0, x:-200}}
            animate = {{opacity: 1, x:0}}
            exit = {{opacity: 0, x:-200}}
            className="h-screen grid grid-flow-row px-24 bg-orange-100">
            <nav className="row-span-1 flex items-center">
                <Link href={'/'} className="w-24 h-24 rounded-full grid place-items-center hover:bg-black hover:text-white -translate-x-1/2 text-lg">
                    <TbArrowBackUp />
                </Link>
                <h1 className="">Contact Us</h1>
            </nav>
            <div className="row-span-5 relative">
            </div>
        </motion.section>
    )
}

export default Contact;