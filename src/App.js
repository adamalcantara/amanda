import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Media from "./Pages/Media/Media"

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      
        <Route exact path ="/" component={Home} />
        <Route exact path="/media" component={Media} />
      </Router>
    </div>
  );
}

export default App;
