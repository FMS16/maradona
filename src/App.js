import Home from './components/Home';
import "./assets/styles/style.css"
import Legacy from './components/Legacy';
import Career from './components/Career';
import Biography from './components/Biography';

function App() {
  return (
    <div className="App">
      <Home />
      <main className='main'>
        <Biography />
        <Legacy />
        <Career />
      </main>
    </div>
  );
}

export default App;
