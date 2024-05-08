import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <p>
            Coded by Cecilie Dreyer Lyng.{" "}
            <a href="https://github.com/ceciliedreyer/react-dictionary">
              Open-sourced on Github
            </a>
            .
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
