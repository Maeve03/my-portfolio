
import './App.css';
import MobilePage from './pages/MobilePage';
import {useMediaQuery} from './hooks/useMediaQuery'

function App() {
  let pageType = useMediaQuery('(max-width: 500px)')
  return (
    <div className="App">
        {pageType ? <MobilePage/> : <></> } 
    </div>
  );
}

export default App;
