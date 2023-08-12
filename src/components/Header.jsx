import logo from "../assets/images/logo.svg";
import menuOpen from "../assets/images/icon-menu.svg";
import menuClose from "../assets/images/icon-menu-close.svg";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";

function Header() {
  const navLinks = ["Home", "New", "Popular", "Trending", "Categories"];

  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    console.log("Open drawer: ", openDrawer);
  }, [openDrawer]);

  return (
    <header className="flex justify-between my-8" id="Home">
      <img src={logo} alt="Logo"/>
      <div className="drawer drawer-end inline-block">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={openDrawer}
          onChange={() => setOpenDrawer(!openDrawer)}
        />
        <nav className="flex justify-end">
          <div className="lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <img src={menuOpen} alt="Open menu"/>
            </label>
          </div>

          <div className="hidden lg:block">
            <div className="menu menu-horizontal">
              {navLinks.map((link) => (
                <HashLink
                  key={link}
                  className="hover:text-soft-orange ml-7"
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
          <div className="menu p-4 w-80 h-full text-left bg-off-white text-black relative">
            {/* Close drawer btn */}
            <img
              src={menuClose}
              alt="Close menu"
              className="h-8 w-8 ml-auto m-[5%] cursor-pointer btn-ghost btn-square p-2"
              onClick={() => setOpenDrawer(false)}
            />

            {/* drawer links */}
            {navLinks.map((link) => (
              <HashLink
                key={link}
                className="hover:text-orange mt-7 "
                smooth
                to={`/#${link}`}
                href={`/#${link}`}
                onClick={() => setOpenDrawer(false)}
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
