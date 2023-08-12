import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import LatestNews from './components/LatestNews';

function App() {

  document.getElementsByTagName("html")[0].classList.add("bg-off-white")
  return (
    <div className="App font-inter ">
      <Router>
        <Header />
        {/* Return big banner news and latest news */}
        <LatestNews/>
      </Router>
    </div>
  );
}

export default App;
