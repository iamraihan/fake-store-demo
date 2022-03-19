import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import Menubar from "./components/Menubar/Menubar";

function App() {
  return (
    <div className="App">
      <Menubar></Menubar>
      <Products></Products>
    </div>
  );
}

export default App;
