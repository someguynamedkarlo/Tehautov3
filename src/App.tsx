import "./App.css";
import { motion } from "framer-motion";
import FirstPage from "./first-page";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <FirstPage></FirstPage>
    </div>
  );
}

export default App;
