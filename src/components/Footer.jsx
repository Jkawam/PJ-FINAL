import React from "react";
import MobileFooter from "./mobile/MobileFooter";
import DesktopFooter from "./desktop/DesktopFooter";

const Footer = () => {
return (
    <>
      {/* Visível apenas em telas pequenas */}
    <div className="md:hidden">
        <MobileFooter />
    </div>

      {/* Visível a partir de telas médias (desktop) */}
    <div className="hidden md:block">
        <DesktopFooter />
    </div>
    </>
);
};

export default Footer;
