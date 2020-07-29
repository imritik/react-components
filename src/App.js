import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
// import Dropzone from "./dropzone/Dropzone";
import Skeleton from "./Skeleton";
import Drag from "./dragdrop";

function App() {
  return (
    <div>
      <Router>
        <div>
          <nav
            className="navbar App-header"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <Link to="/skeleton" className="navbar-item">
                Skeleton UI
              </Link>
              <Link to="/dropzone" className="navbar-item">
                Drag N Drop
              </Link>
            </div>
          </nav>

          <Route exact path="/skeleton" component={Skeleton} />
          <Route exact path="/dropzone" component={Drag} />
        </div>
      </Router>
    </div>
  );
}

export default App;
