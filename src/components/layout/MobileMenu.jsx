import { NavLink } from "react-router-dom";
import { HiOutlineBars3 } from "react-icons/hi2";
import { navLinks } from "../../data/navLinks.data";

export default function MobileMenu() {
  return (
    <div className="dropdown dropdown-end lg:hidden">
      <label tabIndex={0} className="theme-toggle-btn btn btn-sm btn-circle">
        <HiOutlineBars3 size={18} />
      </label>

      <ul
        tabIndex={0}
        className="menu dropdown-content z-[100] mt-3 w-52 rounded-box border border-base-300 bg-base-200 p-2 shadow"
      >
        {navLinks.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path}>{link.label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
