import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
<Navbar title="textutils" aboutText="about us"/>

<div className="container">
<TextForm heading="enter the text to analyze"/>
</div>

    </>
  );
}

export default App;
