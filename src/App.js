import './App.css';
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import data from './data'

function App() {

  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Resume work={ data.work }/>
      <Portfolio carouselImages={ data.carouselImages } modals={ data.modals }/>
    </div>
  );
}

export default App;
