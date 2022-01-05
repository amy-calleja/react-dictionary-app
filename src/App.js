import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <h1>Dictionary App</h1>
          <Dictionary />
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
