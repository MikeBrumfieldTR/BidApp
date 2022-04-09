import logo from './logo.svg';
import './App.css';
import Menu from './menu/menu';
import ArtWorkList from './ArtWorkList/ArtWorkList';

function App() {
  return (
    <div>
      <header>
        <Menu></Menu>
      </header>
      <div>
        <ArtWorkList></ArtWorkList>
      </div>
    </div>
  );
}

export default App;
