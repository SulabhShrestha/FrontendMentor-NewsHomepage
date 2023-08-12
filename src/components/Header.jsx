import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import { HashLink } from "react-router-hash-link";

function Header() {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  return (
    <header className="flex justify-between my-8">
      <img src={logo} />
      <div className="drawer drawer-end inline-block">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <nav className="flex justify-end">
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <img src={menuOpen} />
            </label>
          </div>

          <div className="hidden lg:block">
            <div className="menu menu-horizontal">
              {navLinks.map((link) => (
                <HashLink
                  key={link}
                  className="hover:text-orange ml-7"
                  smooth
                  to={`/#${link}`}
                  href={`/#${link}`}
                >
                  {link}
                </HashLink>
              ))}
            </div>
          </div>
        </nav>

        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <div className="menu p-4 w-80 h-full bg-base-200">
            {/* drawer links */}
            {navLinks.map((link) => (
              <HashLink
                key={link}
                className="hover:text-orange mt-7"
                smooth
                to={`/#${link}`}
                href={`/#${link}`}
              >
                {link}
              </HashLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
