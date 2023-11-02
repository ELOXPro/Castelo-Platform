import { About } from "./About"
import { Contact } from "./Contact"
import { Features } from "./Features"
import { Introduction } from "./Introduction"

export const Home = (props) => {
  const { setPage} = props;
    return (
      <div className="w-full">
      <Introduction setPage={setPage}/>
      <About/>
      <Features/>
      <Contact/>
      </div>
    )
  }