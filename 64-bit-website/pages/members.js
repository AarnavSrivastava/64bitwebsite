import Biography from "../components/biography.js"
import atharv from "../images/atharv.jpg"
import james from "../images/james1.jpg";
import aditya from "../images/aditya.jpg"

export default function Members() {
    return (
      <div className="flex flex-col gap-[5vw] pb-[4vw]">
          <h1 className="text-black text-5xl font-bold flex justify-center mt-10 font-Poppins">
            Members
          </h1>
          <div className="flex flex-col border-t-4 border-amber-400">
            <Biography right={true} name="Atharv Thakur" image={atharv}>
              Atharv Thakur is both a flute player and arranger for the 64 Bit Jazz Combo. He has been playing the flute for 8 years, 
              and has significant experience with both classical and jazz styles. He hopes his playing and arranging will bring a unique 
              flavor to the combo which will keep its performances interesting from start to finish.
            </Biography>
            <Biography name="Aditya Balas" image={aditya}>ksdjfnkj sdkjn skdjfn sofij aoskjn sdkfns djfn ksjdfn </Biography>
            <Biography right={true} name="James Haber" image={james}>
              James Haber is the drummer, founder, and one of the principal arrangers of of The 64 Bit Jazz Combo.
              He has been playing drums for eight years and has enjoyed music his entire life.
              While originally trained as a rock drummer, he is comfortable playing a wide range of genres and enjoys learning new styles.
              He hopes his style of playing will contribute positively to the success of the group.
            </Biography>
          </div>
      </div>
    )
  }