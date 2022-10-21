const CharityLink = (props) => {
    return (
        <div className="flex flex-row text-black justify-between px-[5vw] font-Opensans justify-center text-3xl w-[100%]">
            <div className="basis-1 grow flex flex-col justify-center items-center gap-[5vw]">
                <div className="flex justify-center">
                    {props.children}
                </div>
                <div className="text-lg">
                    {props.children}
                </div>
                <a target="_blank" href={props.link} className="rounded-lg w-[10vw] flex text-lg font-Poppins py-[1vw] justify-center text-center border-2 border-black shadow-lg transition ease-in-out hover:bg-black hover:text-amber-400 hover:scale-125">
                    Donate Now
                </a>
            </div>
            <div className="max-w-[50vw] min-w-[49vw]">
                Image
            </div>
        </div>
    )
}

export default CharityLink;