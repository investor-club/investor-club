import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import RouteContainer from "./components/RouteContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouteContainer />
    </div>
  );
}

export default App;
