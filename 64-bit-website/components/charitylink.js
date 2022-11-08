import Image from "next/image";

const CharityLink = (props) => {
    return (
        <div className="flex flex-row text-black justify-between gap-[10vw] px-[5vw] font-Inter text-3xl w-[100%]">
            <div className="hidden md:flex w-[30vw] justify-center">
                <Image src={props.img} alt={props.name} />
            </div>
            <div className="basis-1 grow flex flex-col justify-center items-center gap-[5vw]">
                <div className="flex flex-row items-center gap-[10vw]">
                    <div className="basis-1/2 flex md:hidden w-[30vw] justify-center">
                        <Image src={props.img} alt={props.name} />
                    </div>
                    <div className="flex font-RobotoC text-center">
                        {props.name}
                    </div>
                </div>
                <div className="md:text-[1.3vw] text-[1.25rem] text-center leading-loose">
                    {props.children}
                </div>
                <a target="_blank" rel="noreferrer" href={props.link} className="uppercase font-bold active:ring-4 active:ring-gray-300 px-[2vw] w-[15vw] min-w-[200px] flex md:text-[1vw] text-[0.6em] font-Poppins md:py-[1vw] py-[1em] justify-center text-center border-2 border-black shadow-lg transition ease-in-out hover:bg-black hover:text-amber-400 hover:scale-125">
                    Donate Now
                </a>
            </div>
        </div>
    )
}

export default CharityLink;