import './App.scss';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Navbar from './components/Nav/Navbar';
import ProductList from './components/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Bio />
      <ProductList />
      <Contact />

      <footer>© All Rights Reserved, ALAN PAUL MIR</footer>
    </div>
  );
}

export default App;
