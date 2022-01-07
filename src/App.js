import "./App.css";
import Dictionary from "./Dictionary";
import Footer from "./Footer";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} alt="search" />
          <h1>Dictionary App</h1>
          <Dictionary defaultKeyword="sunset" />
        </section>
      </header>
      <Footer />
    </div>
  );
}

export default App;
