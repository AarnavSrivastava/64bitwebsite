import Image from "next/Image"
import logo_transparent from "../logos/logo_transparent.png"

export default function Home() {
  return (
    <div className="flex flex-col">
        <h1 className="basis-9/12 text-5xl text-black font-bold font-Poppins flex justify-center mt-10">
          The 64 Bit Jazz Combo
        </h1>
        <Image src={logo_transparent} alt="logo" />
    </div>
  )
}
