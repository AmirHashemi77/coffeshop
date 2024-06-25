import React, { useContext, useEffect, useRef } from "react";
import AccountIcon from "../../../icons/AccountIcon";
import CartIcon from "../../../icons/CartIcon";
import { Link, NavLink } from "react-router-dom";
import { uiContext } from "../../../context/UiContext";
import UserSetting from "./UserSetting";

const HeaderMd = () => {
  const headerEl = useRef();
  const uiCtx = useContext(uiContext);

  useEffect(() => {
    const handleOnWheel = (e) => {
      const headerHeight = headerEl?.current?.getBoundingClientRect()?.height;

      if (window.scrollY > headerHeight && e.deltaY > 0) {
        headerEl.current.classList.add("-translate-y-full");
        headerEl.current.classList.replace("bg-transparent", "bg-header");
        uiCtx?.setOpenRegisterMenu(false)
      }
      if (window.scrollY === 0) {
        headerEl.current.classList.replace("bg-header", "bg-transparent");
      }
      if (e.deltaY < 0) {
        headerEl.current.classList.remove("-translate-y-full");
      }
    };

    document.addEventListener("wheel", handleOnWheel);

    return () => {
      document.removeEventListener("wheel", handleOnWheel);
    };
  }, []);

  return (
    <>
      {uiCtx?.isopenRegisterMenu && (
        <div
          onClick={() => uiCtx?.setOpenRegisterMenu(false)}
          className="fixed top-0 right-0 w-full h-full z-20"
        ></div>
      )}
      <header
        ref={headerEl}
        className="hidden lg:flex items-center justify-between h-20 fixed w-full top-0 left-0 z-30 duration-300 bg-transparent 2xl:h-24"
      >
        {/* backdrop */}
        <div className="flex items-center justify-between w-1/2 px-5">
          <Link to="/">
            <img src="/images/logo.png" alt="logo" />
          </Link>
          <div className="flex items-center gap-3">
            <div
              className="flex items-center justify-center relative"
              onClick={() => uiCtx?.setOpenRegisterMenu((prev) => !prev)}
            >
              <span className="cursor-pointer">
                <AccountIcon />
              </span>
              {uiCtx.isopenRegisterMenu && <UserSetting />}
            </div>
            <Link to="/cart">
              <CartIcon />
            </Link>
          </div>
        </div>
        <ul className="flex items-center justify-between w-1/2 h-full px-3  z-10">
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/"
            >
              home
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/menu"
            >
              menu
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/services"
            >
              services
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/products"
            >
              product
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/blogs"
            >
              blog
            </NavLink>
          </li>
          <li className="h-full">
            <NavLink
              className={({ isActive }) =>
                isActive ? "link-header active-link-header" : "link-header"
              }
              to="/aboutus"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderMd;
