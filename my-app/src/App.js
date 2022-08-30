import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className = "container bg-purple-200 rounded-xl shadow border p-8 m-10">
        <h1 className = "text-5xl font-light">Emma Thomas Portfolio</h1>
      </div>
      
      {/* <h2 className = "text-3xl font-bold">Projects</h2> */}

      <div class="grid grid-flow-row grid-cols-2 grid-rows-3">
        <div className = "container ">Project 1</div>
        <div className = "container" >Project 2</div>
        
      </div>
    
    </div>
  );
}

export default App;
