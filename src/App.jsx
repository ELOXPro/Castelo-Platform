import { Menu } from './Components/Menu'
import { useState } from 'react'
import { Home } from './Components/Home';



function App() {
  const [menuOpened, setMenuOpened] = useState(true);
  const [page, setPage] = useState('Home');
  let onview;

  if (page === 'Home') {
    onview = <Home/>}
  else if (page === 'Presets') {
    onview = null}
  else if (page === 'Guide') {
    onview = null}
  else if (page === 'Editor') {
    onview = null}
  else {
    onview = <Home/>
  }

  return (
    <div className="absolute top-0 left-0 w-full bg-gradient-to-bl from-slate-500 via-slate-700 to-slate-900">
    <Menu menuOpened={menuOpened} setMenuOpened={setMenuOpened} setPage={setPage}/>
      {onview}
    </div>
  )
}
export default App;
