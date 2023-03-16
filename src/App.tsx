import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WildersList from "./components/WildersList";
import { WildersProvider } from "./contexts/WildersContext";

function App() {
  return (
    <WildersProvider>
      <Header />
      <WildersList />
      <Footer />
    </WildersProvider>
  );
}

export default App;
