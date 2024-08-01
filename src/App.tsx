import { HouseIcon, List, User } from "lucide-react";
import "./App.css";
import { Button } from "./components/button";

function App() {
  return (
    <div className="flex gap-3">
      <div className="w-[80vw] h-[90vh] rounded-lg bg-red-600">MainPage</div>
      <div className="w-[4vw] h-[90vh] absolute right-[10%] rounded-lg bg-blue-700">
        <Button>
          <HouseIcon />
        </Button>
        <Button>
          <List />
        </Button>
        <Button>
          <User />
        </Button>
      </div>
    </div>
  );
}

export default App;
