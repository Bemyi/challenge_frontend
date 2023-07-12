// Components
import Configuration from "./components/Configuration";
import VerticalNavbar from "./components/VerticalNavbar";
import HorizontalNavbar from "./components/HorizontalNavBar";
import WeatherAPI from "./components/Task/WeatherAPI";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <HorizontalNavbar />
      <VerticalNavbar />
      <Configuration />
    </>
  );
}

export default App;
