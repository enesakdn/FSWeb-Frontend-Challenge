import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Compenents/Header";
import { Skills } from "./Compenents/Skills";
import { Profile } from "./Compenents/Profile";

import Footer from "./Compenents/Footer";
import FeedBack from "./Compenents/FeedBack";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Project from "./Compenents/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Skills />
      <Profile />
      <Project />
      <Footer />
      <FeedBack />

      <ToastContainer />
    </div>
  );
}

export default App;
