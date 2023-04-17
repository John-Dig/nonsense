import './App.css';
import portrait from '../img/portrait-svgrepo-com.svg';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={portrait} className="whatever" alt="portrait" />
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
