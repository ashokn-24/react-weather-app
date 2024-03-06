import FetchApi from "./components/FetchApi";
import Header from "./components/Header";
// import WeatherDisplay from "./components/WeatherDisplay";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <section>
        <Header />
      </section>
      <section>
        <FetchApi />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
