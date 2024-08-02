import { Grip, HouseIcon, User } from "lucide-react";
import { Button } from "./button";

interface NavBarProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}
export const NavBar = ({ setCurrentPage }: NavBarProps) => {
  return (
    <div className="absolute top-[50%] translate-y-[-50%] right-[-60px] group-hover:right-10 transition-all flex flex-col justify-center items-center gap-10">
      <div className="absolute right-[-70px] bg-blue-700 w-[150px] h-[300px] rounded-l-2xl"></div>
      <Button action={() => setCurrentPage("Home")}>
        <HouseIcon size={42} />
      </Button>
      <Button action={() => setCurrentPage("Projects")}>
        <Grip size={42} />
      </Button>
      <Button action={() => setCurrentPage("Contact")}>
        <User size={42} />
      </Button>
    </div>
  );
};
