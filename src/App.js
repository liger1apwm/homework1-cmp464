import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>JSX IS SO COOL!!!</h1> */}
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* <p> YOOO we are in reactttt.</p> */}
        <p> My name is Eric!! and I'm going to master React!</p>
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
