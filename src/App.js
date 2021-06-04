import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Curriculum from "./components/Curriculum";
import Projects from "./components/Projects";
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
      iconCheck.checked = true;
      setMenu(true);
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "pink"
      top.style.backgroundColor = "white"
      mid.style.backgroundColor = "white"
      low.style.backgroundColor = "white"
    } else {
      iconCheck.checked = false;
      setMenu(false);
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "#F4F1DE"
      top.style.backgroundColor = "red"
      mid.style.backgroundColor = "red"
      low.style.backgroundColor = "red"
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
