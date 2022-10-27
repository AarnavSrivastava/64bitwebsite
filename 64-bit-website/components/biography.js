import React from "react"
import Image from "next/image"

const Biography = (props) => {
    return (
        <div className="border-b-4 border-amber-400 flex relative flex-row justify-between w-full font-Inter text-black">
            {props.right && <div className="basis-5/12 border-r-4 border-amber-400 flex justify-center">
                <Image object-fit src={props.image} className="absolute transition ease-in-out hover:scale-110 grow " id="gangsta" alt={props.name} />
            </div>}
            <div className="basis-0 grow flex flex-col justify-center items-center gap-3 text-center">
                <div className="md:text-[2.5vw] text-md font-RobotoC">
                    {props.name}
                </div>
                <div className="px-[4vw] md:text-[1.2vw] text-[0.4em] flex flex-col justify-center">
                    <div>{props.children}</div>
                </div>
            </div>
            {!props.right && <div className="basis-5/12 border-l-4 border-amber-400 flex justify-center">
                <Image object-fit src={props.image} className="absolute transition ease-in-out hover:scale-110 grow " id="gangsta" alt={props.name} />
            </div>}
        </div>
    )
}

export default Biography;