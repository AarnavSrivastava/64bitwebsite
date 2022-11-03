import CharityLink from "../components/charitylink";
import Form from "../components/form";
import HFB from "../images/hfb.webp"
import SAVE from "../images/save.webp"
import MAWNJ from "../images/mawnj.webp"
import StJudes from "../images/stjudes.webp"

export default function Charities() {
    return (
      <div className="flex flex-col gap-[10vw] pb-[4vw]">
          <h1 className="lg:text-[3vw] text-5xl font-Poppins font-bold text-black flex justify-center mt-10">
            Charities
          </h1>

          <Form />

          <CharityLink link="https://hugsforbrady.org/donations/" name="Hugs For Brady" img={HFB}>
            &quot;The Hugs for Brady Foundation was established to help children battling cancer and assist in research to 
            ultimately find a cure for pediatric cancer. We are a 501(c)(3) non-profit corporation. All donations 
            are 100% tax deductible.&quot; - Hugs For Brady Foundation
          </CharityLink>

          <CharityLink link="https://www.stjude.org/donate/donate-to-st-jude.html?sc_icid=wtg-mm-btn-donate-now" name="St. Jude Children&apos;s Research Hospital" img={StJudes}>
            &quot;The mission of St. Jude Children&apos;s Research Hospital is to advance cures, and means of prevention, for pediatric 
            catastrophic diseases through research and treatment. Consistent with the vision of our founder Danny Thomas, no 
            child is denied treatment based on race, religion or a family&apos;s ability to pay.&quot; - St. Jude Children&apos;s Research Hospital
          </CharityLink>

          <CharityLink link="https://savehomelessanimals.org/donate/#dropdowns" name="SAVE" img={SAVE}>
            &quot;Founded in 1941, SAVE is an independent 501(c)(3) non-profit animal shelter dedicated to protecting 
            the health and welfare of homeless companion animals in the greater Princeton area. Through six core 
            programs of Rescue, Shelter, Health and Welfare, Spay/Neuter, Adoption, and Humane Education, SAVE focuses 
            on the rehabilitation and successful placement of treatable and adoptable animals. SAVE endeavors to build, 
            foster, and strengthen the human-animal bond.&quot; - SAVE
          </CharityLink>

          <CharityLink link="https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=003-000" name="Make-A-Wish Foundation New Jersey" img={MAWNJ}>
            &quot;Make-A-Wish traces its inspiration to Christopher James Greicius, an energetic 7-year-old boy battling leukemia who wishes 
            to be a police officer. In 1980, his Phoenix community came together to make his wish come true. Little 
            did Chris know that his wish would create a movement that would transform millions of lives. Today, Make-A-Wish 
            has granted hundreds of thousands of life-changing wishes to children battling critical illnesses. Wishes that give 
            families hope through dark times, strength to persevere and experiences that forever change their lives.&quot; - Make-A-Wish Foundation
          </CharityLink>
      </div>
    )
  }

