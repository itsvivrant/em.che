import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <iframe src="https://giphy.com/embed/7zGmpJmwUp5lNFudOf" width="580" height="398" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p className="question">Will You Be My Girlfriend ?</p>
      </header>
      <div className="choices">
        <button className="buttonOne"> Yes
        </button>
        <button className="buttonTwo"> No
        </button>
      </div>
    </div>
  );
}

export default App;
