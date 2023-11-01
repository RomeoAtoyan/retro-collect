import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllPlatformsPage from "./pages/AllPlatformsPage";
import CartPage from "./pages/CartPage";
import ConsoleDetailPage from "./pages/ConsoleDetailPage";
import GameDetailPage from "./pages/GameDetailPage";
import HomePage from "./pages/HomePage";
import { PlatformIdProvider } from "./Context/PlatformID/PlatformID";

function App() {
  return (
    <>
      <PlatformIdProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/platform/:id" element={<ConsoleDetailPage />} />
            <Route path="/platforms/all" element={<AllPlatformsPage />} />
            <Route path="/game/:id" element={<GameDetailPage />} />
          </Routes>
        </Router>
      </PlatformIdProvider>
    </>
  );
}

export default App;
