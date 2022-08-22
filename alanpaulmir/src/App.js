import './App.scss';
import Bio from './components/Bio/Bio';
import Home from './components/Home/Home';
import ProductList from './components/ProjectList/ProjectList';

function App() {
  return (
    <div className="App">
      <Home />
      <Bio />
      <ProductList />
    </div>
  );
}

export default App;
