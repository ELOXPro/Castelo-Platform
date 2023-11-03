import { Menu } from './Components/Menu'
import { useState } from 'react'
import { Home } from './Components/Home';
import { Instore } from './Components/Instore';
import { Editor } from './Components/Editor';



function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [page, setPage] = useState('Home');
  let onview;

  if (page === 'Home') {
    onview = <Home setPage={setPage}/>}
  else if (page === 'In The Store') {
    onview = <Instore/>}
  else if (page === 'Guides') {
    onview = null}
  else if (page === 'Customize Now') {
    onview = <Editor/>}
  else {
    onview = <Home setPage={setPage}/>
  }

  return (
    <>
    <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} setPage={setPage}/>
    <div className="absolute top-0 left-0 w-full h-full">
      {onview}
    </div>
    </>
  )
}
export default App;
