import React from "react"
import Image from "next/Image"

const Biography = (props) => {
    return (
        <div className="flex flex-row justify-between w-[100%] font-Opensans text-black">
            {props.right && <div className="w-[50vw]">
                <Image src={props.image} className="grow object-fill" id="gangsta" alt={props.name} />
            </div>}
            <div className="grow break-all flex flex-col justify-center items-center gap-3">
                <div className="md:text-[2.5vw] text-md">
                    {props.name}
                </div>
                <div className="md:text-[1vw] text-[0.25em] flex flex-col justify-center">
                    <div>{props.children}</div>
                </div>
            </div>
            {!props.right && <div className="w-[50vw]">
                <Image src={props.image} className="basis-1/12 grow object-fill" id="gangsta" alt={props.name} />
            </div>}
        </div>
    )
}

export default Biography;