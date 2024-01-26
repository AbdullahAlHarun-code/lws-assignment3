import "./assets/styles/output.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <TaskBoard />
      <Footer />
    </>
  );
}

export default App;
