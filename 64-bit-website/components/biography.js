import React from "react"
import Image from "next/image"

const Biography = (props) => {
    return (
        <div className="border-b-4 border-amber-400 flex relative flex-col sm:flex-row justify-between w-full font-Inter text-black">
            {props.right && <div className="max-w-[750px] basis-5/12 sm:border-b-0 border-b-4 sm:border-r-4 border-amber-400 flex justify-center">
                <Image placeholder="blur" priority="true" object-fit="true" src={props.image} className="absolute transition ease-in-out hover:scale-110 grow " id="gangsta" alt={props.name} />
            </div>}
            <div className="basis-0 py-[10vw] grow flex flex-col justify-center items-center gap-[2vw] text-center">
                <div className="sm:text-[2.5vw] text-[1.5em] font-RobotoC">
                    {props.name}
                </div>
                <div className="px-[4vw] sm:text-[1.2vw] text-[1em] flex flex-col justify-center">
                    <div>{props.children}</div>
                </div>
            </div>
            {!props.right && <div className="max-w-[750px] basis-5/12 border-l-4 border-amber-400 flex justify-center">
                <Image placeholder="blur" priority="true" object-fit="true" src={props.image} className="absolute transition ease-in-out hover:scale-110 grow " id="gangsta" alt={props.name} />
            </div>}
        </div>
    )
}

export default Biography;