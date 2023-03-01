import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar1 from "./components/Sidebar1";
import MainContent from "./components/MainContent";
import Sidebar2 from "./components/Sidebar2";
import Footer from "./components/Footer";
import './app.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section className="allContentContainer">
        <Sidebar1 />
        <MainContent />
        <Sidebar2 />
      </section>
      <Footer />
    </div>
  );
}

export default App;
