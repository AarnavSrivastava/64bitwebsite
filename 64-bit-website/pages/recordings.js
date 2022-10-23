import Image from "next/image"
import logo_transparent from "../logos/logo_transparent.png"

export default function Recordings() {
    return (
      <div>
          <h1 className="text-5xl text-black font-bold font-Poppins flex justify-center mt-10">
            Recordings
          </h1>
          <div className="text-2xl text-black font-bold font-Poppins flex justify-center mt-10">
            Coming soon...
          </div>
          <Image src={logo_transparent} alt="logo transparent" />
      </div>
    )
  }