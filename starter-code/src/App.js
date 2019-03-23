import React, { Component } from "react";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <nav className="container">
            <img src="/images/ironhack-logo.svg" />

            <img src="/images/menu-top.svg" />
          </nav>
          <div className="container">
            <h1>
              Say hello to<br />
              ReactJS
            </h1>
            <p>
              You will learn a Frontend<br />
              framework from scratch, to<br />
              became an Ninka Developer
            </p>
            <a className="btn" href="#">
              Awesome!
            </a>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="row">
              <div className="col">
                <img src="/images/icon1.png" />
                <h2>Declarative</h2>
                <p>
                  React makes it<br />
                  painless to create<br />
                  interactive UIs.
                </p>
              </div>

              <div className="col">
                <img src="/images/icon2.png" />
                <h2>Components</h2>
                <p>
                  Build encapsulated<br />
                  components that<br />
                  manage their state.
                </p>
              </div>

              <div className="col">
                <img src="/images/icon3.png" />
                <h2>Single-way</h2>
                <p>
                  A set of immutable<br />
                  values are passed to<br />
                  the component's
                </p>
              </div>

              <div className="col">
                <img src="/images/icon4.png" />
                <h2>JSX</h2>
                <p>
                  Statically-typed,<br />
                  designed to run on<br />
                  modern browsers.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
