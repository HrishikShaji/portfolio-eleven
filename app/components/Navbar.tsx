export const Navbar = () => {
  return (
    <div className="w-full p-10 text-white flex justify-between fixed top-0 items-center">
      <h1 className="text-3xl font-semibold">HRISHIK SHAJI.</h1>
      <div className="flex gap-4 items-center">
        <button className="p-2 rounded-md bg-white text-black">DARK</button>
        <button className="p-2 rounded-md bg-white text-black">MENU</button>
      </div>
    </div>
  );
};
