import Image from "next/Image";

const CharityLink = (props) => {
    return (
        <div className="flex flex-row text-black justify-between gap-[10vw] px-[5vw] font-Inter text-3xl w-[100%]">
            <div className="w-[30vw] justify-center">
                <Image src={props.img} alt={props.name} />
            </div>
            <div className="basis-1 grow flex flex-col justify-center items-center gap-[5vw]">
                <div className="flex font-RobotoC text-center">
                    {props.name}
                </div>
                <div className="md:text-[1.3vw] text-sm text-center leading-loose">
                    {props.children}
                </div>
                <a target="_blank" rel="noreferrer" href={props.link} className="rounded-lg w-[10vw] flex md:text-[1vw] text-[0.25em] font-Poppins py-[1vw] justify-center text-center border-2 border-black shadow-lg transition ease-in-out hover:bg-black hover:text-amber-400 hover:scale-125">
                    Donate Now
                </a>
            </div>
        </div>
    )
}

export default CharityLink;