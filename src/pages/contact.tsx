export const Contact = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-slate-500">
      <div className="w-[30%] h-[30%]">
        <h1 className="text-3xl">Contact</h1>
        <div className="flex flex-col items-start">
          <div className="flex gap-2">
            <p>GitHub:</p>
            <a
              className="text-white hover:text-black"
              href="https://github.com/RockyPHER"
            >
              https://github.com/RockyPHER
            </a>
          </div>
          <p>LinkedIn:</p>
          <p>Email:</p>
          <p>Phone:</p>
        </div>
      </div>
    </div>
  );
};
