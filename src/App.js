import "./styles/styles.css";
import { Typography } from "@material-ui/core";
import Tabs from "./components/Tabs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
      <Tabs />
      <Footer />
    </div>
  );
}

export default App;
