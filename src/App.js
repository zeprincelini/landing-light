import Layout from "./app-layout/layout";
import "./App.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
