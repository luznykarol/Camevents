import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import Logo from "@/icons/Logo";
import ScrollLink from "@/components/ScrollLink";
import Icon from "@/components/Icon";
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

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  const node = useRef();

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      window.pageYOffset > 30 ? setNavClass(true) : setNavClass(false);
    };

    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navClass]);

  // useEffect(() => {
  //   const onScroll = (e) => {
  //     setScrollTop(e.target.documentElement.scrollTop);
  //     setScrolling(e.target.documentElement.scrollTop > scrollTop);
  //   };
  //   window.addEventListener("scroll", onScroll);

  //   return () => window.removeEventListener("scroll", onScroll);
  // }, [scrollTop]);

  const navData = {
    pages,
    menuOpen,
    setMenuOpen,
  };

  // console.log(scrollTop);

  return (
    <header
      className={`${
        scrollTop > 10
          ? "header bg-grey-700 z-50 py-4"
          : "py-8 header bg-transparent"
      }  sticky top-0 z-50`}
      ref={node}>
      <div className="container-lg ">
        <div className="flex w-full justify-between items-center">
          <div className="flex w-full items-center justify-between">
            <Link className="nav__brand " to="/">
              <Icon icon="logo" />
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
              <Link className="btn btn--small ml-6" to="/contact/">
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
