import Biography from "../components/biography.js"
import atharv from "../images/atharv.jpg"
import james from "../images/james1.jpg";
import aditya from "../images/aditya.jpg"
import aarnav from "../images/aarnav.jpeg"
import logo_transparent from "../logos/logo_transparent.png"

export default function Members() {
    return (
      <div className="flex flex-col gap-[5vw] pb-[4vw]">
          <h1 className="text-black text-5xl font-bold flex justify-center mt-10 font-Poppins">
            Members
          </h1>
          <div className="flex flex-col border-t-4 border-amber-400">
            <Biography right={true} name="Aarnav Srivastava" image={aarnav}>
              Aarnav Srivastava is both an alto and a tenor saxophone player for the 64 Bit Jazz Combo. He has been playing alto saxophone for
              8 years and tenor saxophone for 1 year, and has experience in both classical and jazz music. He enjoys
              playing saxophone for the band, and was the person who developed the website that you&apos;re on right now!
            </Biography>
            <Biography name="Atharv Thakur" image={atharv}>
              Atharv Thakur is both a flute player and arranger for the 64 Bit Jazz Combo. He has been playing the flute for 8 years, 
              and has significant experience with both classical and jazz styles. He hopes his playing and arranging will bring a unique 
              flavor to the combo which will keep its performances interesting from start to finish.
            </Biography>
            <Biography right={true} name="Aditya Balas" image={aditya}>
              Aditya Balas is the bassist of the 64 Bit Jazz Combo. He has had 9 years of experience across violin, 
              piano, and bass guitar. Although he was initially trained on classical music, he has recently been 
              expanding his talents to cover other genres such as rock, metal, and jazz.
            </Biography>
            <Biography name="James Haber" image={james}>
              James Haber is the drummer, founder, and one of the principal arrangers of of The 64 Bit Jazz Combo.
              He has been playing drums for eight years and has enjoyed music his entire life.
              While originally trained as a rock drummer, he is comfortable playing a wide range of genres and enjoys learning new styles.
              He hopes his style of playing will contribute positively to the success of the group.
            </Biography>
            <Biography right={true} name="Anant Chary" image={logo_transparent}>
              Coming soon...
            </Biography>
            <Biography name="Sayan Chakraborty" image={logo_transparent}>
              Coming soon...
            </Biography>
            <Biography right={true} name="Chase Yetter" image={logo_transparent}>
              Coming soon...
            </Biography>
          </div>
      </div>
    )
  }