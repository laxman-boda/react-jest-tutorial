import Header from "./Components/Header/Header";
import './app.scss';
import Headline from "./Components/Headline/Headline";

function App() {
  const tempArr = [{
    fName:'Boda',
    lName:'Laxman',
    email:'laxman@gmail.com',
    age:25,
    onlineStatus:true
  }]

  return (
    <div className="App">
      <Header />
      <section className="main">
          <Headline header="Posts" desc="Click the button to render post" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
