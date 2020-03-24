import React from "react";
import s from "./App.module.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <Navbar />
      <Profile />
      <Footer />
    </div>
  );
};



export default App;
