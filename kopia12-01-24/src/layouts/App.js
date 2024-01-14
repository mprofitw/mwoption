import { BrowserRouter } from "react-router-dom";
import React, { Component } from "react";
import "../sass/main.scss";
// import "../sass/burgerMenu.scss";
import "../sass/top_menu.scss";
import Header from "./Header";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import Navigation from "./Navigation";
import Content from "./Content";
import BurgerMenu from "./BurgerMenu";

class App extends Component {
  handleClickBurgerIcon = () => {
    if (this.state.burgerIconIsActive) {
      this.setState({
        burgerIconIsActive: !this.state.burgerIconIsActive,
      });
    } else
      this.setState({
        burgerIconIsActive: !this.state.burgerIconIsActive,
      });
  };

  state = {
    burgerIconIsActive: true,
  };

  render() {
    return (
      <>
        <div className="wrapper">
          <BrowserRouter>
            <Header />
            <TopMenu active={this.state.burgerIconIsActive} />
            <div onClick={this.handleClickBurgerIcon} className="burger">
              {/* {this.state.burgerIcon} */}
              {this.state.burgerIconIsActive ? (
                <i className="fas fa-bars"></i>
              ) : (
                <i className="fa fa-close"></i>
              )}
            </div>
            <main>
              <aside className="navigation-aside ">
                {<Navigation active={this.state.burgerIconIsActive} />}{" "}
              </aside>{" "}
              <section className="main-content">{<Content />}</section>
            </main>{" "}
            <footer className="footer">{<Footer />}</footer>
          </BrowserRouter>
        </div>
      </>
    );
  }
}
export default App;
