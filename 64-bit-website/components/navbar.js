import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";
import Image from "next/Image";
import logo from "../logos/logo_main.png"
import logo_text from "../logos/logo_text.png"

const Navbar = () => {
    return (
        <navbar className="h-screen flex flex-col fixed px-[5vw] w-[15vw] bg-black justify-center items-center gap-10 py-8 md:text-[1.5vw] text-sm font-RobotoC">
            <div className="md:w-[10vw] w-[90px] absolute -translate-y-[35vh]">
                <Image priority src={logo} className="" id="logo" alt="logo" />
            </div>
            <LinkButton to="/">Home</LinkButton>
            <LinkButton to="/about">About</LinkButton>
            <LinkButton to="/members">Members</LinkButton>
            <LinkButton to="/recordings">Recordings</LinkButton>
            <LinkButton to="/charities">Charities</LinkButton>
            <div className="md:w-[10vw] w-[90px] absolute translate-y-[40vh]">
                <Image priority src={logo_text} className="" alt="text logo" />
            </div>
        </navbar>
    )
}

const LinkButton = ({to, children}) => {
    const router = useRouter();
    
    return (
        <div className={((router.pathname == to) ? "text-amber-400" : "text-white") + " transition ease-in-out hover:text-slate-300 hover:scale-105"}>
            <Link href={to} scroll={true} >{children}</Link>
        </div>
    )
}

export default Navbar;