import Link from "next/link";

export default function About() {
    return (
      <div className="text-black flex flex-col gap-[5vw] px-[5vw] mb-[5vw]">
          <h1 className="text-5xl font-bold font-Poppins flex justify-center mt-10">
            About
          </h1>
          <div className="flex flex-col font-RobotoC text-3xl text-center gap-[5vw]">
            <div>
              WHO ARE WE?
              <div className="mt-[2vw] md:text-[1.4vw] text-sm font-Inter leading-loose">
                Hi everyone, we are the 64 Bit Jazz Combo. Originally conceived in our sophomore 
                year as a way to get together and play music in a time of otherwise musical isolation,
                our group began as a simple gathering of friends in our founder&apos;s garage. However, as 
                we continued to play with each other and develop as an ensemble, we realized that we 
                could take our combo to the next level. After receiving the opportunity to play in our 
                high school&apos;s annual jazz concert, we decided to formalize our status as a band, and 
                began the necessary planning to bring our music to a wider audience. Now in our junior 
                year, our goal is to perform for charity at a wide variety of venues, and raise awareness 
                about causes we care about. We hope you can join us in our journey.
              </div>
            </div>
            <div>
              WHAT DO WE PLAY?
              <div className="mt-[2vw] md:text-[1.4vw] text-sm font-Inter leading-loose">
                We are comfortable playing anything, really. We have experience with swing, rock, funk, Latin, 
                and even soundtrack music. If you would like to request that we play a certain piece for you, 
                email us at&nbsp;
                <nobr className="text-blue-400 underline hover:text-blue-600">
                  <a rel="noreferrer" target="_blank" href="mailto:64bitjazzcombo@gmail.com"> 
                    64bitjazzcombo@gmail.com
                  </a>
                </nobr>
              </div>
            </div>
            <div>
              HOW CAN I BOOK YOU FOR A PERFORMANCE?
              <div className="mt-[2vw] md:text-[1.4vw] text-sm font-Inter leading-loose">
                We can play at any event or fundraiser, and we would love to play for you. Email us at&nbsp;
                <nobr className="text-blue-400 underline hover:text-blue-600">
                  <a rel="noreferrer" target="_blank" href="mailto:64bitjazzcombo@gmail.com"> 
                    64bitjazzcombo@gmail.com
                  </a>
                </nobr>
                &nbsp;to request us to perform at any event you are hosting.
              </div>
            </div>
          </div>
      </div>
    )
  }