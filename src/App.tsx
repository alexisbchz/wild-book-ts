import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WildersList from "./components/WildersList";
import { WildersProvider } from "./contexts/WildersContext";
import AddWilderForm from "./components/AddWilderForm";

function App() {
  return (
    <WildersProvider>
      <Header />
      <AddWilderForm />
      <WildersList />
      <Footer />
    </WildersProvider>
  );
}

export default App;
