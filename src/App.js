import logo from './logo.svg';
import './App.css';
import Page from './table1/Page';
import PeopleList from './table2/PeopleList.js';

function App() {
  return (
    // <div className="App">
    <div>
      {/* <header className="App-header"> */}
      {/* <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/* <Page /> */}
      <PeopleList />
    </div>
  );
}

export default App;
