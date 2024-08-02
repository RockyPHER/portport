import { ProjectItem } from "../components/project";

export const Projects = () => {
  return (
    <div className="w-full h-full bg-black">
      <h1>Projects</h1>
      <div className="flex justify-center gap-10">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};
