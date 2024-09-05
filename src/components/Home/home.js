import { Component } from "react";
import Header from "../Header/header";
//import EBooks from "./TrendingBooks/trendingBooks";
import "./home.css";


import BookStoreContext from "../../Context/BookStoreContext";
import BestBooks from "./BestBooks/bestBooks";
//import Magazines from "./Magazines/magazines";
import Footer from "../Footer/footer";
import { FeatureHeading, FeaturePara } from "./homeStyling";

class Home extends Component {
  render() {
    return (
      <BookStoreContext.Consumer>
        {(value) => {
          const { isDark } = value;
          const bgColor = isDark ? "#000000" : "#ffffff";
          return (
            <div className="home-main-container" style={{ backgroundColor: bgColor }}>
              <Header />
              <BestBooks />
              <br/> 
              <Footer /> 
            </div>
          );
        }}
      </BookStoreContext.Consumer>
    );
  }
}

export default Home;
