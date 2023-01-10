import About from "./components/about/about"
import Details from "./components/details/details";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="first" >
        <About/>
      </div>
      <div className="second" >
        <Details/>
      </div>
    </div>
  );
}

export default App;