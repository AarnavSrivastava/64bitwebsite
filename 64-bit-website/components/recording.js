import { useState } from "react"
import Image from "next/image";

export default function Recording({youtubeId, title}) {

    const [showVid, setShow] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center text-center text-black h-full w-full gap-[1vw]">
            <div className="lg:text-[2.5vw] text-2xl font-Inter mb-[1vw]">{title}</div>
            {showVid ? 
                <div className="h-full w-full px-[5vw]">
                    <iframe
                        width={560}
                        height={315}
                        src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={title}
                        className="aspect-[16/9] h-full w-full p-0 border-4 border-amber-400"
                    />
                </div>
                :
                <div className="h-full w-full px-[5vw]">
                    <button onClick={() => setShow(true)} className="flex flex-col items-center justify-center aspect-[16/9] h-full w-full relative border-4 border-amber-400 group">
                        <Image 
                            src={
                                `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
                            }
                            alt=""
                            layout="fill"
                            className="h-full w-full"
                        />
                        <div className="grid relative place-items-center">
                            <div className="absolute border-4 border-gray-700 group-hover:border-gray-600 bg-gray-800 group-hover:bg-gray-700 rounded-full md:py-[20px] md:px-[25px] py-[10px] px-[10px] duration-200 ease-in-out">
                                <div className="left-0 right-0 md:border-b-[20px] md:border-t-[20px] md:border-l-[30px] border-b-[5px] border-t-[5px] border-l-[10px] border-b-transparent border-t-transparent border-solid w-0 h-0 group-hover:border-l-white border-l-gray-50 duration-200 ease-in-out"/>
                            </div>
                        </div>
                    </button>
                </div>
            }
        </div>
    )
}