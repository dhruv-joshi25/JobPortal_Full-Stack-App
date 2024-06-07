import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routes from "./Routes";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes />
        <Footer />
      </>
    </Router>
  );
}

export default App;
