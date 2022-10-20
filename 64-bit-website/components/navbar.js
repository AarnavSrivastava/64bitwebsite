import React from "react";
import Link from "next/link"

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
    return (
        <div className="text-white transition ease-in-out hover:text-slate-300">
            <Link href={to}>{children}</Link>
        </div>
    )
}

export default Navbar;