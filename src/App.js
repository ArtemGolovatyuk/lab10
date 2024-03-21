import picture from "./dg.png"
import "./style.css"

function App() {
  return (
    <div className="App">
      <div className="container1 cont" id="cont1">
        <header>
          <div className="logo">
            <p> project <span>REACT</span></p>
          </div>
          <nav>
            <ul>
              <li><a href="#cont1">Головна</a></li>
              <li><a href="#cont2">Наші розробки</a></li>
              <li><a href="#cont3">Пропозиції</a></li>
              <li><a href="#cont4">Контакти</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <img id="back" src={picture} alt="dthsrt" />
        </main>
        <input></input>
      </div>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
