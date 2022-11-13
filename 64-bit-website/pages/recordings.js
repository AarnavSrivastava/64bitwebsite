import Image from "next/image"
import logo_transparent from "../logos/logo_transparent.png"
import Recording from "../components/recording"

export default function Recordings() {
    return (
      <div className="text-black flex flex-col items-center gap-[5vw] pb-[4vw]">
          <h1 className="lg:text-[3vw] text-5xl text-black font-bold font-Poppins text-center justify-center mt-10">
            Recordings
          </h1>
          <Recording youtubeId="0slFdlt7XkA" title="Brisa Do Mar At The South Brunswick Senior Center" />
          <Image src={logo_transparent} alt="logo" />
      </div>
    )
  }