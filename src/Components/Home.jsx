import { About } from "./About"
import { Contact } from "./Contact"
import { Features } from "./Features"
import { Introduction } from "./Introduction"

export const Home = () => {
    return (
      <div className="w-full">
      <Introduction/>
      <About/>
      <Features/>
      <Contact/>
      </div>
    )
  }