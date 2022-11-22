import { NavLink } from "react-router-dom";
import Navbar from "./component/Navbar";
// import Navigation from "./component/Navigation";
import { useRef } from "react";

function App() {
  const ref = useRef(null)
  return (
    <div ref={ref} className="App">
        <Navbar/>
        {/* <Navigation/> */}
    </div>
  );
}

export default App;
