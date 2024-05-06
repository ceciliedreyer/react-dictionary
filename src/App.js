import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Search Engine</h1>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <p>Coded by Cecilie Lyng</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
