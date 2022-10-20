import Biography from "../components/biography.js"
import bian from "../images/bunger.jpeg"
import james from "../images/james1.jpg";
import aditya from "../images/aditya_gamer.jpg"

export default function Members() {
    return (
      <div className="flex flex-col gap-[5vw] pb-[4vw]">
          <h1 className="text-black text-5xl font-bold flex justify-center mt-10 font-Poppins">
            Members
          </h1>
          <div className="flex flex-col">
            <Biography name="Gangsta Bian" image={bian}>ksdjfnkj sdkjn skdjfn sofij aoskjn sdkfns djfn ksjdfn </Biography>
            <Biography right={true} name="James Haber" image={james}>ksdjfnkj sdkjn skdjfn sofij aoskjn sdkfns djfn ksjdfn </Biography>
            <Biography name="Aditya Balas" image={aditya}>ksdjfnkj sdkjn skdjfn sofij aoskjn sdkfns djfn ksjdfn </Biography>
          </div>
      </div>
    )
  }