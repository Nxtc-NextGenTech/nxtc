import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Projects from "./Components/Projects";

function App() {
  return (
    <div className="App">
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
