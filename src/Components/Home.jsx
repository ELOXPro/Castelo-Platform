import { About } from "./About"
import { Contact } from "./Contact"
import { Features } from "./Features"
import { Footer } from "./Footer"
import { Introduction } from "./Introduction"

export const Home = (props) => {
  const { setPage} = props;
    return (
      <div className="w-full mt-16">
      <Introduction setPage={setPage}/>
      <About/>
      <Features/>
      <Contact/>
      <Footer setPage={setPage}/>
      </div>
    )
  }