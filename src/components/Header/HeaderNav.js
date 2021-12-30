import React from "react";
import { Link } from "gatsby"; /* eslint-disable */
import { CSSTransition } from "react-transition-group";
import ScrollLink from "@/components/ScrollLink";

const HeaderNav = ({ data }) => {
  const { menuOpen, pages, setMenuOpen, handleClick } = data;

  let navClass =
    "absolute  top-0 right-0 w-full  bg-grey-700 z-50 h-screen w-full lg:hidden";

  navClass = menuOpen ? `${navClass} block` : navClass;
  return (
    <CSSTransition
      in={menuOpen}
      a
      timeout={400}
      classNames="nav-slide"
      unmountOnExit>
      <div className={navClass}>
        <div className="h-full w-full flex flex-col items-center justify-center">
          {pages.map((item, i) => (
            <ScrollLink
              onClick={() => setMenuOpen(false)}
              className="nav__link--mobile"
              key={i}
              href={item.href}
              text={item.label}
            />
          ))}
          <Link
            onClick={() => setMenuOpen(false)}
            className="btn btn--small"
            to="/kontakt/">
            Dołącz
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HeaderNav;
