export const ProjectItem = () => {
  return (
    <div className="flex flex-col justify-center items-center hover:scale-105 hover:shadow-xl active:scale-100 hover:bg-white bg-opacity-0 hover:bg-opacity-40 transition-all">
      <div className="w-[240px] h-[120px] flex justify-center items-center rounded-lg hover:rounded-none bg-green-600 cursor-pointer select-none transition-all">
        Comming soon...
      </div>
      <p>description</p>
    </div>
  );
};
