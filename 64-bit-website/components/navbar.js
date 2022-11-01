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
        <navbar className="h-screen sticky top-0 z-10">
            <div className="hidden h-screen sm:flex flex-col sticky top-0 px-[5vw] max-w-[250px] w-[15vw] bg-black justify-center items-center gap-[2.5vw] py-8 xl:text-[24px] md:text-[1vw] text-sm font-RobotoC">
                <div className="md:w-[10vw] w-[50px] absolute -translate-y-[35vh]">
                    <Image src={logo} className="" id="logo" alt="logo" />
                </div>
                <LinkButton to="/">Home</LinkButton>
                <LinkButton to="/about">About</LinkButton>
                <LinkButton to="/members">Members</LinkButton>
                <LinkButton to="/recordings">Recordings</LinkButton>
                <LinkButton to="/charities">Charities</LinkButton>
                <div className="flex flex-col justify-center gap-[1vw] md:w-[10vw] w-[50px] absolute translate-y-[40vh] md:text-sm text-[1.2vw] text-center text-white">
                    <Image src={logo_text} className="" alt="text logo" />
                    Logo by Andrew Schies
                </div>
            </div>
            <div className="absolute z-10">
                <Hamburger color={(open ? "#FFFFFF" : "#000000")} toggled={open} onToggle={(toggled) => {
                    setOpen(toggled);
                }}/>
            </div>
            <div id="slideover-container" className="absolute sm:hidden z-5 h-screen w-screen font-RobotoC">
                <div className={((open) ? "opacity-50" : "opacity-0") + " duration-500 ease-in-out transition absolute bg-black h-screen w-screen"}/>
                <Menu id="slideover" open={open} />
            </div>
        </navbar>
    )
}

const Menu = (props) => {
    return (
        <div className={((props.open) ? "" : "-translate-x-full") + " duration-700 ease-in-out transition flex flex-col w-[150px] absolute h-screen bg-black justify-center items-center gap-6"}>
            <div className="justify-center w-[100px] -translate-y-[15vw]">
                <Image src={logo} className="" id="logo" alt="logo" />
            </div>
            <div className="flex flex-col -translate-y-[10vh] gap-6 justify-center items-center">
                <LinkButton to="/">Home</LinkButton>
                <LinkButton to="/about">About</LinkButton>
                <LinkButton to="/members">Members</LinkButton>
                <LinkButton to="/recordings">Recordings</LinkButton>
                <LinkButton to="/charities">Charities</LinkButton>
            </div>
            <div className="flex flex-col justify-center gap-[1vw] w-[100px] text-[1.3vw] text-center text-white">
                <Image src={logo_text} className="" alt="text logo" />
                Logo by Andrew Schies
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