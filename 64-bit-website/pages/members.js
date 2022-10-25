import Biography from "../components/biography.js"
import atharv from "../images/atharv.jpg"
import james from "../images/james1.jpg";
import aditya from "../images/aditya.jpg"
import aarnav from "../images/aarnav.jpeg"
import chase from "../images/chase.jpeg"
import anant from "../images/anant.jpg"
import sayan from "../images/sayan.jpg"
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
              Visit the git repository for this website&nbsp;
              <nobr className="text-blue-400 underline hover:text-blue-600"><a rel="noreferrer" target="_blank" href="https://github.com/therealbarney18/64bitwebsite">here</a></nobr>.
            </Biography>
            <Biography name="Sayan Chakraborty" image={sayan}>
              Sayan Chakraborty is an alto saxophone player for the 64 Bit Jazz Combo. He has 
              been playing saxophone for 7 years, with experience in both classical and jazz performance. 
              He bolsters the wind voices of the group by filling out the medium range of pitches.
            </Biography>
            <Biography right={true} name="Atharv Thakur" image={atharv}>
              Atharv Thakur is both a flute player and arranger for the 64 Bit Jazz Combo. He has been playing the flute for 8 years, 
              and has significant experience with both classical and jazz styles. He hopes his playing and arranging will bring a unique 
              flavor to the combo which will keep its performances interesting from start to finish.
            </Biography>
            <Biography name="Chase Yetter" image={chase}>
              Chase Yetter is one of three sax players for the 64 Bit Jazz Combo, 
              but specializes in baritone sax. He has been playing saxophone for 8 years, and bari for 6. 
              With experience in both classical and jazz performance, he rounds out the lower end of the band.
            </Biography>
            <Biography right={true} name="Anant Chary" image={anant}>
              Anant Chary is a guitarist, alto saxophonist, arranger, and composer for
              the 64 Bit Jazz Combo. He has six years of experience with saxophone and three years 
              with guitar. He has mainly explored the genres of jazz and rock, but continues to branch out 
              into other genres such as metal and blues. He hopes that his playing and composition will 
              provide originality for the group and make them stand out. He helped create this website and 
              greatly enjoys making music with the band.
            </Biography>
            <Biography name="Aditya Balas" image={aditya}>
              Aditya Balas is the bassist of the 64 Bit Jazz Combo. He has had 9 years of experience across violin, 
              piano, and bass guitar. Although he was initially trained on classical music, he has recently been 
              expanding his talents to cover other genres such as rock, metal, and jazz.
            </Biography>
            <Biography right={true} name="James Haber" image={james}>
              James Haber is the founder, drummer, and one of the principal arrangers of 
              The 64 Bit Jazz Combo. He has been playing drums for eight years and 
              has enjoyed music his entire life. While originally trained as a rock drummer, 
              he is comfortable playing a wide range of genres and enjoys learning new styles. 
              He hopes his style of playing will contribute positively to the success of the group.
            </Biography>
          </div>
      </div>
    )
  }