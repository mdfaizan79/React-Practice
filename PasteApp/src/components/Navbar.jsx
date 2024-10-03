
import { NavbarData } from "../data/Navbar";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-[45px] flex justify-center items-center p-4 bg-gray-800 gap-x-5 shadow-md">
  {NavbarData.map((link, idx) => (
    <NavLink
      key={idx}
      to={link.path}
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 font-semibold text-xl transition-transform duration-200 ease-in-out transform hover:scale-110"
          : "text-white font-medium text-xl transition-transform duration-200 ease-in-out transform hover:text-blue-300 hover:scale-105"
      }
    >
      {link.title}
    </NavLink>
  ))}
</div>

  );
};

export default Navbar;
