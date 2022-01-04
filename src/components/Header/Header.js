import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import ScrollLink from "@/components/ScrollLink";
import Icon from "@/components/Icon";
import HeaderNav from "@/components/Header/HeaderNav";

const Header = () => {
  const pages = [
    {
      label: "Jak dołączyć",
      href: "#howSection",
    },
    {
      label: "FAQ",
      href: "#faqSection",
    },
    {
      label: "O nas",
      href: "#halfSection",
    },
    {
      label: "Kontakt",
      href: "#mapSection",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [navClass, setNavClass] = useState(false);

  const node = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    if (node.current.contains(e.target)) {
      return;
    }
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     window.pageYOffset > 30 ? setNavClass(true) : setNavClass(false);
  //   };

  //   window.addEventListener("scroll", handleScroll, { passive: true });
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [navClass]);

  const navData = {
    pages,
    menuOpen,
    setMenuOpen,
    handleClick,
  };

  return (
    <header
      className="py-6 header bg-transparent"
      // }  sticky top-0 z-50"
      // className={`${
      //   navClass ? "header bg-grey-700 z-50 py-4" : "py-8 header bg-transparent"
      // }  sticky top-0 z-50`}
      ref={node}>
      <div className="container-lg ">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-full items-center justify-between">
            <Link className="nav__brand " to="/">
              {/* <Icon icon="logo" /> */}
              <h1 className="text-cam-white mb-0">CamEvents</h1>
            </Link>

            <div className="hidden lg:flex items-center">
              {pages.map((item, i) => (
                <ScrollLink
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
