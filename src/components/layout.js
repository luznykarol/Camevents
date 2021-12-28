/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import "@/styles/main.scss";
import Header from "@/components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative bg-gradient-main-bg">
        <Header />
        <main className="page-content">{children}</main>
      </div>
    </>
  );
};

export default Layout;
