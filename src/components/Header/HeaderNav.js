import React from "react";
import { Link } from "gatsby"; /* eslint-disable */
import { CSSTransition } from "react-transition-group";

const HeaderNav = ({ data }) => {
  const { menuOpen, pages, setMenuOpen } = data;
  let navClass =
    "fixed  top-0 right-0 w-full  bg-grey-700 z-50 h-screen w-full lg:hidden";

  navClass = menuOpen ? `${navClass} block` : navClass;
  return (
    <CSSTransition
      in={menuOpen}
      timeout={400}
      classNames="nav-slide"
      unmountOnExit>
      <div className={navClass}>
        <div className="h-full w-full flex flex-col items-center justify-center">
          {pages.map((item, i) => (
            <a className="nav__link--mobile" key={i} to={item.href}>
              {item.label}
            </a>
          ))}
          <Link className="btn btn--small" to="/kontakt/">
            Dołącz
          </Link>
        </div>
      </div>
    </CSSTransition>
  );
};

export default HeaderNav;
