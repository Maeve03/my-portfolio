
import './App.css';
import {useMediaQuery} from './hooks/useMediaQuery'
import PortfolioPage from './pages/PortfolioPage';

function App() {
  //let pageType = useMediaQuery('(max-width: 600px)')
  return (
    <div className="App">
        <PortfolioPage/> 
    </div>
  );
}

export default App;
