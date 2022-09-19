import Header from "./Components/Header/Header";
import './app.scss';
import Headline from "./Components/Headline/Headline";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
          <Headline header="Posts" desc="Click the button to render post" />
      </section>
    </div>
  );
}

export default App;
