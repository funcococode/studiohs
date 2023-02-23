import { AnimatePresence, motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp, TbArrowUpRight, TbLoader, TbMoodSmile, TbUnderline } from "react-icons/tb";
import { navItemParentVariant, navItemVariant } from "../helpers/animation";
import { useEffect, useRef, useState } from "react";
import {Email} from '../public/smtp';
interface EmailPayload{
    fullname : string,
    email : string,
    budget : number,
    category : string,
    message : string 
}

const Contact:NextPage = () => {
    const [payLoad, setPayload] = useState<EmailPayload | null>(null);
    const [form, setForm] = useState<HTMLFormElement | undefined>(undefined);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [mailSent, setMailSent] = useState<boolean>(false);
    const formRef = useRef() as React.MutableRefObject<HTMLFormElement>;
    useEffect(() => {
        setForm(formRef.current)
    },[])
    
    const handleClick = (e : MouseEvent) => {
        e.preventDefault();
        const formData = new FormData(form);
        let emailPL: any = [];

        for(const [key,value] of formData){
            emailPL.push(value)
        }

        const [fullname, email, category, budget, message] = emailPL
        if(fullname.value != '' && email.vaue != '' && budget.value != '' && category.value != '' && message.value != ''){
            const emailPL = {
                fullname: fullname.value,
                email: email.value,
                budget: budget.value,
                category: category.value,
                message: message.value 
            }
            sendMail(emailPL);
            setIsSending(true);
            return;
        }else {
            return console.log('Fill all the fields');
        }
    }

    const sendMail = (payLoad : EmailPayload) => {
        let mailSubject = `${payLoad.fullname} - ${payLoad.category}`;
        let body = `
                        Name : <b>${payLoad.fullname}</b><br/>
                        Subject : <b>${mailSubject}</b><br/>
                        Email : <b>${payLoad.email}</b><br/>
                        Budget : <b>${payLoad.budget}</b><br/><br/>
                        ${payLoad.message}
                    `;
        const randomSeconds = Math.round(Math.random() * (3000 - 1000) + 1000);


        setTimeout(function(){
            Email.send({
                Host : "smtp.elasticemail.com",
                Username : "query.studiohr@gmail.com",
                Password : "0E7EC3A1D8323E841DB9B3A3A193574A64D8",
                To : 'connect@studiohr.in',
                From : "query.studiohr@gmail.com",
                Subject : mailSubject,
                Body : body,
            }).then(() => {
                setMailSent(true)
                setIsSending(false);
            });
        },randomSeconds)
    }

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
                <AnimatePresence>
                    {!mailSent && <motion.form initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} ref={formRef} id='form' action="" className="grid gap-5">
                        <div className="grid lg:grid-cols-2 gap-10">
                            <div className="grid gap-4">
                                <label htmlFor="fullname">Your Name</label>
                                <input id="fullname" name='fullname' type="text" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" required/>
                            </div>
                            <div className="grid gap-4">
                                <label htmlFor="email">Your Email</label>
                                <input id='email' name='email' type="email" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" required/>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-10 mt-5 lg:mt-0">
                            <div className="grid gap-4">
                                <label htmlFor="category">What are you interested in?</label>
                                <input id='category' name='category' type="text" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" required/>
                            </div>
                            <div className="grid gap-4">
                                <label htmlFor="budget">Project Budget</label>
                                <input id='budget' name='budget' type="number" className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600" required/>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-1 gap-10">
                            <div className="grid gap-4">
                                <label htmlFor="message">Message</label>
                                <textarea id='message' name='message' className="bg-gray-100 text-xl p-3 rounded outline-none focus:ring-4 ring-blue-600 " required></textarea>
                            </div>
                        </div>
                        <div className="grid lg:grid-cols-3 gap-10">
                            <div className="grid gap-4">
                                <button 
                                    onClick={(e) => handleClick(e)} 
                                    id='sendButton' 
                                    className={`bg-gray-800 text-white p-4 rounded flex items-center justify-between gap-5 ${isSending && 'animate-pulse'}`}>
                                    {isSending ? "Sending..." : "Just Send"}
                                    {isSending ? <span className="animate-spin"><TbLoader /></span> : <TbArrowUpRight />}
                                </button>
                            </div>
                            <div></div>
                            <div></div>
                        </div>
                    </motion.form>}
                    {mailSent && 
                        <motion.p className="font-thin text-4xl px-10 grid place-items-center gap-10">
                            <span className="text-9xl text-green-600 animate-spin">
                                <TbMoodSmile/>
                            </span>
                            <span>
                                Thanks for reaching out! <br/>
                                Someone from our team will connect with you soon.
                            </span>
                        </motion.p>
                    }
                </AnimatePresence>
            </main>
        </motion.section>
    )
}

export default Contact;
