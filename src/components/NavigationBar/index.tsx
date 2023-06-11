"use client";

import { useState } from "react";

import NavigationLinks from "./NavigationLinks";
import IconMenu from "@/icons/IconMenu";

const NavigationBar = () => {
  const [visible, setVisible] = useState(false);

  const openNavigationBar = () => {
    setVisible(true);
  };

  const closeNavigationBar = () => {
    setVisible(false);
  };

  return visible ? (
    <NavigationLinks onClose={closeNavigationBar} />
  ) : (
    <div className="bg-purple pt-4 pl-4">
      <button onClick={openNavigationBar}>
        <IconMenu className="text-white h-6 w-6" />
      </button>
    </div>
  );
};

export default NavigationBar;
