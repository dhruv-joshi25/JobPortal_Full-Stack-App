import React from "react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
// import Routes from "./Routes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {/* <Routes /> */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
