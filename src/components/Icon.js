import React from "react";

import Heart from "@/icons/heart";
import Dollar from "@/icons/dollar";
import Cross from "@/icons/cross";
import Planet from "@/icons/planet";
import Logo from "@/icons/logo";
import Dots from "@/icons/dots";
import Check from "@/icons/check";
import Mail from "@/icons/mail";
import Phone from "@/icons/phone";

const Icon = ({ icon, className }) => {
  const icons = {
    dots: Dots,
    dollar: Dollar,
    heart: Heart,
    cross: Cross,
    logo: Logo,
    planet: Planet,
    check: Check,
    mail: Mail,
    phone: Phone,
  };

  const Icon = icons[icon];
  return (
    <>
      {icon && (
        <div className={className}>
          <Icon />
        </div>
      )}
    </>
  );
};

export default Icon;
