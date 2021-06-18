import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./views/Menu";
import Home from "./views/Home";
import About from "./views/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./views/Contact";
import Curriculum from "./views/Curriculum";
import Projects from "./views/Projects";
import Footer from "./components/Footer";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (menu) => {
    var body = document.body;
    var iconCheck = document.getElementById("check");
    var navBar = document.getElementById("nav");
    var top = document.getElementById("top-bar");
    var mid = document.getElementById("mid-bar");
    var low = document.getElementById("low-bar");
    
    if (menu) {
      setMenu(true);
      iconCheck.checked = true;
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "pink";
      top.style.backgroundColor = "white";
      mid.style.backgroundColor = "white";
      low.style.backgroundColor = "white";
    } else {
      setMenu(false);
      iconCheck.checked = false;
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "#F4F1DE";
      top.style.backgroundColor = "red";
      mid.style.backgroundColor = "red";
      low.style.backgroundColor = "red";
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
              <Curriculum />
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

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
