import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { TbArrowBackUp, TbBrandSpotify, TbBrandYoutube, TbChevronDown, TbExternalLink, TbFilter, TbListNumbers, TbMusic, TbRadio, TbUsers, TbX } from "react-icons/tb";
import { projects } from "../projects";
import { Fragment, useEffect, useState } from "react";
import { navItemParentVariant, navItemVariant } from "../helpers/animation";
import { Menu, Transition } from "@headlessui/react";

type CardProps = {
    id: string;
    name: string;
    description: string;
    tags: string[];
    link?: string | undefined;
}


const Work : NextPage = () => {
    const [project, setProject] = useState<CardProps | null>(null);
    const [filter,setFilter] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(projects);
    useEffect(() => {
        if(filter  == ''){
            setFilteredProjects(projects)
        }else{
            setFilteredProjects(projects.filter(project => project.tags.includes(filter)))
        }
    },[filter])
    return (
        <motion.section 
            initial = {{opacity: 0, x:-200}}
            animate = {{opacity: 1, x:0}}
            exit = {{opacity: 0, x:-200}}
            className="lg:px-24 px-16">
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
            <main className={`pb-16 row-span-5 relative ${project && 'blur pointer-events-none'}`}>
                <div className="mt-12 mb-24 flex flex-col lg:flex-row">
                    <h1 className="flex-1 text-gray-200 font-bold text-6xl lg:text-7xl">
                        Our Work
                    </h1>
                    <Menu>
                        <Menu.Button className={`mt-10 lg:mt-0 grid transition relative border hover:scale-110 bg-white shadow-lg w-fit h-fit px-5 py-2 rounded-lg grid-flow-col items-center justify-between gap-2`}>
                            <TbFilter /> 
                            {filter == '' && 'All'}
                            {filter == 'Song' && 'Originals & Covers'}
                            {filter == 'Radio' && 'Radio'}
                            {filter == 'Commercial' && 'Commercial'}
                        </Menu.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                            >
                            <Menu.Items className={`overflow-hidden grid absolute lg:translate-y-10 lg:right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
                                <Menu.Item>
                                    <a
                                        className={`p-4 hover:bg-indigo-500 hover:text-white flex items-center justify-between gap-3 ${filter == '' && 'bg-indigo-400 text-white'}`}
                                        onClick={() => setFilter('')}
                                        >
                                        <span className={`flex items-center gap-3`}>
                                            <TbListNumbers />
                                            All
                                        </span>
                                        <span className="text-sm">
                                            {projects.length}
                                        </span>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a
                                        className={`p-4 hover:bg-indigo-500 hover:text-white flex items-center justify-between gap-3 ${filter == 'Song' && 'bg-indigo-400 text-white'}`}
                                        onClick={() => setFilter('Song')}
                                        >
                                        <span className={`flex items-center gap-3`}>
                                            <TbMusic />
                                            Originals & Covers
                                        </span>
                                        <span className="text-sm">
                                            {projects.filter(project => project.tags.includes('Song')).length}
                                        </span>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a
                                        className={`p-4 hover:bg-indigo-500 hover:text-white flex items-center justify-between gap-3 ${filter == 'Radio' && 'bg-indigo-400 text-white'}`}
                                        onClick={() => setFilter('Radio')}
                                        >
                                        <span className={`flex items-center gap-3`}>
                                            <TbRadio />
                                            Radio
                                        </span>
                                        <span className="text-sm">
                                            {projects.filter(project => project.tags.includes('Radio')).length}
                                        </span>
                                    </a>
                                </Menu.Item>
                                <Menu.Item>
                                    <a
                                        className={`p-4 hover:bg-indigo-500 hover:text-white flex items-center justify-between gap-3 ${filter == 'Commercial' && 'bg-indigo-400 text-white'}`}
                                        onClick={() => setFilter('Commercial')}
                                    >
                                        <span className={`flex items-center gap-3`}>
                                            <TbUsers />
                                            Commercial
                                        </span>
                                        <span className="text-sm">
                                            {projects.filter(project => project.tags.includes('Commercial')).length}
                                        </span>
                                    </a>
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {
                        filteredProjects.map(project => 
                            <motion.li 
                                layout='position' 
                                layoutId={project.id} 
                                onClick={() => setProject(project)} 
                                key={project.id} 
                                className={`
                                        bg-white 
                                        border 
                                        rounded-lg 
                                        px-5 
                                        py-10
                                        cursor-pointer 
                                        flex
                                        items-center
                                        gap-5
                                        group

                                    `}
                            >
                                <aside className="text-xl">
                                    {(project.tags.includes('Song') || project.tags.includes('Cover')) && <TbMusic />}
                                    {(project.tags.includes('Commercial')) && <TbUsers />}
                                    {(project.tags.includes('Radio')) && <TbRadio />}
                                </aside>
                                <div className="">
                                    <h2 className="font-bold text-gray-800">{project.name}</h2>
                                    <p className="text-gray-500 mt-3">{project.description}</p>
                                </div>
                                
                            </motion.li>
                        )
                    }
                </ul>
            </main>
            {
                project && 
                <motion.div layoutId={project.id} className="absolute top-1/4 left-1/3 w-1/3 border bg-white shadow-2xl rounded-lg overflow-hidden z-50" >
                    <Card project={project} setProject={setProject}/>    
                </motion.div>
            } 
        </motion.section>
    )
}

const Card : any = (props : any) => {
    const {project, setProject} = props
    const {id, name, description, link, tags, spotify, local_link, youtube, media_type, radio} = project; 
    return (
        <motion.section className={`grid ${(media_type == 'video') ? "grid-rows-6" : "grid-rows-2"}`}>
            {(media_type == 'video') && <header className="w-full h-full row-span-3 relative">
                <button onClick={() => setProject(null)} className="z-[2] absolute right-5 top-5 w-12 h-12 rounded-full grid place-items-center text-2xl bg-red-600 text-rose-100 peer cursor-pointer">
                    <TbX />
                </button>
                <div className="absolute z-1 pointer-events-none inset-0 bg-transparent peer-hover:bg-opacity-60 peer-hover:bg-black"></div>
                {!local_link && <embed src={`${link}`}  className="w-full h-full rounded-t row-span-5"/>}
                {local_link && <video controls className="w-full h-64 rounded-t row-span-5">
                        <source src={local_link} type="video/mp4" />
                    </video>}
            </header>}
            <main className={`p-10 grid gap-5 ${(media_type == 'video') && "row-span-2"} relative`}>
                {(media_type != 'video') && <button onClick={() => setProject(null)} className="z-[2] absolute right-5 top-5 w-12 h-12 rounded-full grid place-items-center text-2xl bg-red-600 text-rose-100 peer cursor-pointer">
                    <TbX />
                </button>}
                <h1 className="text-lg font-bold">{name}</h1>
                <p className="text-gray-600">{description}</p>
                <div className="flex gap-3">
                    {spotify && <a target="__blank" href={spotify} className="text-2xl border border-green-500 text-green-500  hover:bg-green-500 hover:text-white rounded-3xl w-fit px-4 py-2 flex items-center gap-2">
                        <TbBrandSpotify />
                        <span className="text-xs">
                            Listen on Spotify
                        </span>
                    </a>}
                    {youtube && <a target="__blank" href={youtube} className="text-2xl border border-red-500 text-red-500  hover:bg-red-500 hover:text-white rounded-3xl w-fit px-4 py-2 flex items-center gap-2">
                        <TbBrandYoutube />
                        <span className="text-xs">
                            Watch on Youtube
                        </span>
                    </a>}
                    {media_type == 'radio_link' && <a target="__blank" href={radio} className="text-2xl border border-red-500 text-red-500  hover:bg-red-500 hover:text-white rounded-3xl w-fit px-4 py-2 flex items-center gap-2">
                        <TbRadio />
                        <span className="text-xs">
                            Open Link
                        </span>
                        <TbExternalLink />
                    </a>}
                </div>
            </main>
            <footer className="row-span-1 h-full bg-gray-100 flex gap-2 items-center px-10">
                {tags && tags.map((tag : string) => <li key={tag} className="list-none rounded-2xl bg-gray-500 text-gray-200 px-3 text-sm py-1">{tag}</li>)}
            </footer>
        </motion.section>
    )
}

export default Work;