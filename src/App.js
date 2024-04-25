import Header from './header/Header';
import ItemContainer from './item-container/ItemContainer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
        <Route path="/" element={<ItemContainer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


/*<div className="App">
      <header className="App-header">
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
      </header>
    </div>*/