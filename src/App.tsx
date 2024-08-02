import "./App.css";
import { Home } from "./pages/home";
import { Button } from "./components/button";
import { Contact } from "./pages/contact";
import { useState } from "react";
import { Projects } from "./pages/projects";
import { Background } from "./components/background";
import { Grip, HouseIcon, User } from "lucide-react";

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
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-center items-center gap-3">
      <Background />
      <div className="w-[90%] h-[90vh] rounded-lg overflow-hidden">
        {renderPage()}
      </div>
      <div className="w-[4vw] h-[95vh] absolute top-[50%] right-[10%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 rounded-lg bg-blue-700">
        <Button action={() => setCurrentPage("Home")}>
          <HouseIcon size={36} />
        </Button>
        <Button action={() => setCurrentPage("Projects")}>
          <Grip size={36} />
        </Button>
        <Button action={() => setCurrentPage("Contact")}>
          <User size={36} />
        </Button>
      </div>
    </div>
  );
}

export default App;
