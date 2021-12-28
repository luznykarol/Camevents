import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Logo from "@/icons/Logo";
import ScrollLink from "@/components/ScrollLink";
import HeaderNav from "@/components/Header/HeaderNav";

const Header = () => {
  const pages = [
    {
      label: "Jak dołączyć",
      href: "#features",
    },
    {
      label: "FAQ",
      href: "#faq",
    },
    {
      label: "O nas",
      href: "#about",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState(false);
  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    window.pageYOffset > 30 ? setNavClass(true) : setNavClass(false);
  };

  const navData = {
    pages,
    menuOpen,
    setMenuOpen,
  };

  return (
    <header
      className={`${
        navClass ? "header bg-grey-700 z-50 py-4" : "py-8 header bg-transparent"
      }  sticky top-0 z-50`}
      ref={node}>
      <div className="container-lg ">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-full items-center justify-between">
            <Link className="nav__brand " to="/">
              <Logo />
            </Link>

            <div className="hidden lg:flex items-center">
              {pages.map((item, i) => (
                <ScrollLink
                  ScrollLink
                  className="nav__link"
                  key={i}
                  href={item.href}
                  text={item.label}
                />
              ))}
              <Link className="btn btn--small ml-6" to="/kontakt/">
                Dołącz
              </Link>
            </div>
          </div>
          <button
            aria-label="Open mobile menu"
            className={menuOpen ? "nav__btn nav__btn--open" : "nav__btn"}
            onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <HeaderNav data={navData} />
    </header>
  );
};

export default Header;
