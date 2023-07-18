import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Blob from './components/Blob';

function App() {
  return (
    <div className='bg-[#000000]'>
      <Navbar />
      <Home />
      <About />
      {/* <Blob/> */}
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
}

export default App;
