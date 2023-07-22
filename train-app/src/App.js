import './App.css';
import NavBar from './components/NavBar';
import TrainItem from './components/TrainItem';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="conatiner">
        <TrainItem/>
      </div>
    </div>
  );
}

export default App;
