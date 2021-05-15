import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [menu, setMenu] = useState(false);

  const handleMenu = (menu) => {
    var iconCheck = document.getElementById("check");
    if (menu) {
      iconCheck.checked = true;
      setMenu(true);
    } else {
      iconCheck.checked = false;
      setMenu(false);
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
        <div className="content">
          {menu && (
            <Menu
              display={menu}
              showMenu={(menu) => {
                handleMenu(menu);
              }}
            />
          )}
          <Switch>
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
