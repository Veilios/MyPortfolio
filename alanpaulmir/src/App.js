import './App.scss';
import Bio from './components/Bio/Bio';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import ProductList from './components/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Home />
      <Bio />
      <ProductList />
      <Contact />

      <footer>© All Rights Reserved, ALAN PAUL MIR</footer>
    </div>
  );
}

export default App;
