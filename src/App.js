import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer.component";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";

function App() {
  const [scrollUp, setScrollUp] = useState("none");
  useEffect(() => {
    const handleScroll = (event) => {
      var scroll = window.scrollY;
      console.log(scroll);
      if (scroll < 445) {
        setScrollUp("none");
      } else {
        setScrollUp("block");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
      <a
        id="scrollUp"
        href="#body-wrapper"
        style={{ position: "fixed", zIndex: 2147483647, display: scrollUp }}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
}

export default App;
