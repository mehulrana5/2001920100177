import './App.css';
import NavBar from './components/NavBar';
import TrainItem from './components/TrainItem';
import {TrainDataProvider} from './context/TrainContext';

function App() {
  return (
    <>
      <TrainDataProvider>
        <div className="App">
          <NavBar/>
          <TrainItem/>
        </div>
      </TrainDataProvider>
    </>
  );
}

export default App;
