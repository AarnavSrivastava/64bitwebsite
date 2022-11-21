import Recording from "../components/recording"

export default function Recordings() {
    return (
      <div className="text-black flex flex-col items-center gap-[5vw] pb-[4vw] w-full h-full">
          <h1 className="lg:text-[3vw] text-5xl text-black font-bold font-Poppins text-center justify-center mt-10">
            Recordings
          </h1>
          <div className="flex flex-col gap-[3vw] justify-center items-center">
            <Recording youtubeId="0slFdlt7XkA" title="Brisa Do Mar - Live At The South Brunswick Senior Center" />
            <Recording youtubeId="OniZWVTR9Z8" title="A Taste of Honey - Live at Complete Care at Park Place" />
          </div>
      </div>
    )
  }