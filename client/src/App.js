import logo from './logo.png';
import './App.css';
import Welcome from './fuck-you-file.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Hello wankers!
        </p> */}
          <div> 
        <Welcome></Welcome>
          </div>
      </header>
    </div>
  );
}

export default App;
