import React, { useEffect, useState } from "react";
import Link from "next/link"
import { useRouter } from "next/router";

const Navbar = () => {
    return (
        <navbar className="flex w-full bg-black justify-center items-center gap-6 px-4 py-8 text-2xl font-RobotoC">
            <LinkButton to="/">Home</LinkButton>
            <LinkButton to="/about">About</LinkButton>
            <LinkButton to="/members">Members</LinkButton>
            <LinkButton to="/recordings">Recordings</LinkButton>
            <LinkButton to="/charities">Charities</LinkButton>
        </navbar>
    )
}

const LinkButton = ({to, children}) => {
    const [active, setActive] = useState(false);
    const router = useRouter();
    
    useEffect(() => {
        if (router.pathname == to)
            setActive(true);
        else
            setActive(false);
    })
    
    return (
        <div className={((active) ? "text-amber-400" : "text-white") + " sm:flex hidden transition ease-in-out hover:text-slate-300 hover:scale-105"}>
            <Link href={to}>{children}</Link>
        </div>
    )
}

export default Navbar;