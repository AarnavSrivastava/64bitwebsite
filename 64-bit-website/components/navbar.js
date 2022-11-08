import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../logos/logo_main.png"
import logo_text from "../logos/logo_text.png"
import  Hamburger from 'hamburger-react'


const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        open ? document.body.style.overflow="hidden" : document.body.style.overflow="auto"
    }, [open])

    const router = useRouter();

    useEffect(() => {
        if (open) {
            setOpen(prev => !prev);
        }
    }, [router.asPath]);

    return (
        <navbar className={"z-[99] h-screen sticky top-0"}>
            <div className="hidden h-screen sm:flex flex-col sticky top-0 px-[5vw] max-w-[250px] w-[15vw] bg-black justify-center items-center gap-[2.5vw] pb-8 xl:text-[24px] sm:text-[2vw] text-sm font-RobotoC">
                <div className="flex justify-center items-center w-[15vw] max-w-[250px] bg-gray-400 bg-opacity-40 mb-auto py-[2vw]">
                    <div className="w-[6vw]">
                        <Image src={logo} className="" id="logo" alt="logo" />
                    </div>
                </div>
                <LinkButton to="/">Home</LinkButton>
                <LinkButton to="/about">About</LinkButton>
                <LinkButton to="/members">Members</LinkButton>
                <LinkButton to="/recordings">Recordings</LinkButton>
                <LinkButton to="/charities">Charities</LinkButton>
                <div className="flex flex-col justify-center gap-[1vw] md:w-[10vw] w-[50px] mt-auto text-[0.6em] text-center text-gray-300">
                    <Image src={logo_text} className="" alt="text logo" />
                    Art by Andrew Schies
                </div>
            </div>
            <div className={(open ? "bg-transparent" : "bg-white-opaque") + " duration-500 z-[100] ease-in-out transition absolute rounded-full p-2 ml-1 mt-1 flex sm:hidden"}>
                <Hamburger color={(open ? "#FFFFFF" : "#000000")} toggled={open} onToggle={(toggled) => {
                    setOpen(toggled);
                }}/>
            </div>
            <div className="absolute sm:hidden font-RobotoC">
                <Menu open={open} />
            </div>
        </navbar>
    )
}

const Menu = (props) => {
    return (
        <div className={((props.open) ? "" : "-translate-x-full") + " duration-700 ease-in-out transition flex flex-col w-[50vw] absolute h-screen bg-black justify-center items-center gap-6 pb-8"}>
            <div className="flex justify-center items-center w-full bg-gray-400 bg-opacity-40 py-[1.5em] mb-auto">
                <div className="w-[75px]">
                    <Image src={logo} className="" id="logo" alt="logo" />
                </div>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center text-[1.1em]">
                <LinkButton to="/">Home</LinkButton>
                <LinkButton to="/about">About</LinkButton>
                <LinkButton to="/members">Members</LinkButton>
                <LinkButton to="/recordings">Recordings</LinkButton>
                <LinkButton to="/charities">Charities</LinkButton>
            </div>
            <div className="mt-auto pb-[1vw] flex flex-col justify-center gap-[1vw] w-[150px] text-[0.6em] text-center text-gray-300">
                <Image src={logo_text} className="" alt="text logo" />
                Art by Andrew Schies
            </div>
        </div>
    )
}

const LinkButton = ({to, children}) => {
    const router = useRouter();
    
    return (
        <div className={((router.pathname == to) ? "text-amber-400" : "text-white") + " transition ease-in-out hover:text-slate-300 hover:scale-105"}>
            <Link href={to} scroll={false} >{children}</Link>
        </div>
    )
}

export default Navbar;