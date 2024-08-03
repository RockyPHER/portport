import { DiMongodb } from "react-icons/di";
import { SiMariadb, SiReact, SiTypescript } from "react-icons/si";

export const Home = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-400 bg-opacity-30 select-none">
      <div className="">Davidson J. Amaro</div>
      <div className="flex justify-center items-center text-5xl gap-3">
        Olá, sou <p className="text-orange-400">Dev.</p>
      </div>
      <div className="absolute top-[450px] right-14 flex gap-3">
        <SiReact size={42} color="#61DBFB" />
        <SiTypescript size={42} color="#007ACC" />
        <SiMariadb size={42} color="#007ACC" />
        <DiMongodb size={42} color="#4DB33D" />
      </div>
    </div>
  );
};
