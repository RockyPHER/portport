import { Grip, HouseIcon, User } from "lucide-react";
import "./App.css";
import { Button } from "./components/button";
import { Background } from "./components/background";

function App() {
  return (
    <div className="flex gap-3">
      <Background />
      <div className="w-[80vw] h-[90vh] rounded-lg bg-red-600">MainPage</div>
      <div className="w-[4vw] h-[95vh] absolute top-[50%] right-[10%] translate-y-[-50%] flex flex-col justify-center items-center gap-10 rounded-lg bg-blue-700">
        <Button>
          <HouseIcon size={36} />
        </Button>
        <Button>
          <Grip size={36} />
        </Button>
        <Button>
          <User size={36} />
        </Button>
      </div>
    </div>
  );
}

export default App;
