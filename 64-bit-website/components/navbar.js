import React from "react";
import Link from "next/link"

const Navbar = () => {
    return (
        <navbar className="flex w-full h-[60px] bg-black items-center gap-6 px-4">
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
        <div className="hover:underline">
            <Link href={to}>{children}</Link>
        </div>
    )
}

export default Navbar;