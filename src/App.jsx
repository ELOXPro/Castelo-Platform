import { Menu } from './Components/Menu'
import { useState } from 'react'
import { Home } from './Components/Home';
import { Instore } from './Components/Instore';
import { Editor } from './Components/Editor';



function App() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [page, setPage] = useState('home');
  const [Light, setLight] = useState(true);
  let onview;

  if (page === 'home') {
    onview = <Home setPage={setPage}/>}
  else if (page === 'store') {
    onview = <Instore/>}
  else if (page === 'news') {
    onview = null}
  else if (page === 'Customize Now') {
    onview = <Editor setPage={setPage}/>}
  const ThemeChange = () => {
    if (!Light){
      document.documentElement.classList.remove('dark')
      setLight(true);
    }
    if (Light){
        document.documentElement.classList.add('dark')
        setLight(false);
    }
    };

  return (
    <>
    <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} page={page} setPage={setPage} ThemeChange={ThemeChange} Light={Light}/>
    <div className="absolute top-0 w-full h-full">
      {onview}
    </div>
    </>
  )
}
export default App;
