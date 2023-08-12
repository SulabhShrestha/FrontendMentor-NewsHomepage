
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import LatestNews from './components/LatestNews';
import OldNews from './components/OldNews';

function App() {

  document.getElementsByTagName("html")[0].classList.add("bg-off-white")
  return (
    <div className="App font-inter mx-[5%] md:mx-[10%]">
      <Router>
        <Header />
        {/* Return big banner news and latest news */}
        <LatestNews/>
        <OldNews/>
      </Router>
    </div>
  );
}

export default App;
