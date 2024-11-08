import React from "react";
import "./../../styles/layout.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout">{children}</div>;
};

export default Layout;
