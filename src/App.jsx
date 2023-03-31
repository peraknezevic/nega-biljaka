import { BsFacebook, BsInstagram } from "react-icons/bs"
import "./App.css"

function App() {
  return (
    <div className="App">
      <div className="logo">
        <a href="https://negabiljaka.com/">Nega Biljaka</a>
      </div>
      <h1>Vratiće se uskoro</h1>
      <p>U toku su radovi na sajtu.</p>
      <p>Pratite nas na društvenim mrežama: </p>
      <p className="socialLinks">
        <a href="https://www.facebook.com/negabiljaka">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/negabiljaka">
          <BsInstagram />
        </a>
      </p>
    </div>
  )
}

export default App
