import "./App.css";
import { Home } from "./pages/home";
import { Contact } from "./pages/contact";
import { useState } from "react";
import { Projects } from "./pages/projects";
import { Background } from "./components/background";
import { NavBar } from "./components/navbar";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("");

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-screen h-screen overflow-hidden flex justify-center items-center gap-3">
      <Background />
      <div className="w-[90%] h-[90vh] rounded-lg overflow-hidden">
        {renderPage()}
      </div>
      <div className="group absolute top-0 right-0 w-[120px] h-full">
        <NavBar setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default App;
