import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary App</h1>
        <Dictionary />
      </header>
      <br />
      <Footer />
    </div>
  );
}

export default App;
