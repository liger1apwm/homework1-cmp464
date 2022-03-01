import logo from './eric.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>JSX IS SO COOL!!!</h1> */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <p> YOOO we are in reactttt.</p> */}
        <p className="App-paragraph"> My name is Eric!! and I'm going to master React!</p>
        <a
          className="App-link"
          href="https://github.com/liger1apwm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
