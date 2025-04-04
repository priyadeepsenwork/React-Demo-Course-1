import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import MainContent from "./components/Home/MainContent";
import WelcomeMessage from "./components/Home/WelcomeMessage";
import "./index.css";

const App = () => {
  return (
    <>
      <section style={{ fontFamily: 'poppins'}}>
        <Header />
        {/* <WelcomeMessage /> */}
        <MainContent />
        <Footer />
      </section>
    </>
  );
};

export default App;
