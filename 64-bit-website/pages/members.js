import Biography from "../components/biography.js"
import Image from "../images/gangsta-man-8530041.jpg"

export default function Members() {
    return (
      <div>
          <h1 className="text-3xl font-bold underline flex justify-center mt-10">
            Members
          </h1>
          <div className="flex justify-center">
            <Biography name="Gangsta Bian" images={Image}>ksdjfnkj sdkjn skdjfn sofij aoskjn sdkfns djfn ksjdfn </Biography>
          </div>
      </div>
    )
  }