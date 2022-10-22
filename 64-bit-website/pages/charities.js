import CharityLink from "../components/charitylink";

export default function Charities() {
    return (
      <div className="flex flex-col gap-[10vw] pb-[4vw]">
          <h1 className="text-5xl font-Poppins font-bold text-black flex justify-center mt-10">
            Charities
          </h1>

          <CharityLink link="https://hugsforbrady.org/donations/" name="Hugs For Brady">
            Hugs For Brady
          </CharityLink>

          <CharityLink link="https://www.save.lgbt/donate" name="SAVE DADE">
            Save
          </CharityLink>

          <CharityLink link="https://secure2.wish.org/site/SPageServer?pagename=donate_today&chid=003-000" name="Make-A-Wish Foundation New Jersey">
            Make-A-Wish Foundation New Jersey
          </CharityLink>
      </div>
    )
  }

