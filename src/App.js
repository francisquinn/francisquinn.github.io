import "./App.css";
import { useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Menu from "./views/Menu";
import Home from "./views/Home";
import About from "./views/About";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Contact from "./views/Contact";
import Projects from "./views/Projects";
import Footer from "./components/Footer";
import Error from "./views/Error";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (menu) => {
    var body = document.body;
    var iconCheck = document.getElementById("check");
    var navBar = document.getElementById("nav");
    var top = document.getElementById("top-bar");
    var mid = document.getElementById("mid-bar");
    var low = document.getElementById("low-bar");
    var f = document.getElementById("f");
    var q = document.getElementById("q");

    if (menu) {
      setMenu(true);
      iconCheck.checked = true;
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "#81B29A";
      top.style.backgroundColor = "#f4f1de";
      mid.style.backgroundColor = "#f4f1de";
      low.style.backgroundColor = "#f4f1de";
      f.style.color = "#f4f1de";
      q.style.color = "#f4f1de";
    } else {
      setMenu(false);
      iconCheck.checked = false;
      body.classList.toggle("noscroll");
      navBar.style.backgroundColor = "#F4F1DE";
      top.style.backgroundColor = "#81B29A";
      mid.style.backgroundColor = "#81B29A";
      low.style.backgroundColor = "#81B29A";
      f.style.color = "#3d405b";
      q.style.color = "#e07a5f";
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
        <ScrollToTop />

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
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/error">
              <Error />
            </Route>
            <Redirect to="/error"></Redirect>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
