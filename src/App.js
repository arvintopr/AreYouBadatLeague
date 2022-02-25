import logo from './logo.svg';
import './App.css';

function App() {
  function CallRiotApi(e) {
    e.preventDefault();
    console.log('You clicked button');
    console.log(e.target.name.value)
  }
  return (
    <div className="App">
      <form onSubmit={CallRiotApi}>
        <label>
              Name:
              <input type="text" name="name" />
        </label>
              <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
