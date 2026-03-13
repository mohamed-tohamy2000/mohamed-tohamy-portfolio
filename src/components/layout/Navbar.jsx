import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../../data/navLinks.data";
import { personalData } from "../../data/personal.data";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-5">
      <div className="nav-shell container navbar mx-auto px-4">
        <div className="navbar-start">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white shadow-glow">
              {personalData.initials}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-base-content">
                {personalData.shortName}
              </p>
              <p className="text-xs text-base-content/65">Frontend Developer</p>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <nav className="flex items-center gap-2 rounded-full border border-base-300 bg-base-200/55 px-3 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-primary text-black"
                      : "text-base-content/75 hover:text-base-content"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="navbar-end gap-2">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}


