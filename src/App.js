import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact";
import Cirriculum from "./components/Cirriculum";
import Projects from "./components/Projects";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (menu) => {
    var body = document.body;
    var iconCheck = document.getElementById("check");
    if (menu) {
      iconCheck.checked = true;
      setMenu(true);
      body.classList.toggle("noscroll");
    } else {
      iconCheck.checked = false;
      setMenu(false);
      body.classList.toggle("noscroll");
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar
          display={menu}
          showMenu={(menu) => {
            handleMenu(menu);
          }}
        />

        <div className="content mt-3 ">
          {menu && (
            <Menu
              display={menu}
              showMenu={(menu) => {
                handleMenu(menu);
              }}
            />
          )}

            <Switch>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/curriculum">
                <Cirriculum />
              </Route>
              <Route path="/projects">
                <Projects />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
