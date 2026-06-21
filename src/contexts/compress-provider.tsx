import React, { useEffect, useState } from "react";
import { CompressContext } from "./compress-context";
import { LS_SITE_COMPRESSED_KEY } from "../lib/constants";

export const CompressProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [compressed, setCompressed] = useState(() => {
    return localStorage.getItem(LS_SITE_COMPRESSED_KEY) === "1";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (compressed) {
      root.classList.add("compressed");
      localStorage.setItem(LS_SITE_COMPRESSED_KEY, "1");
    } else {
      root.classList.remove("compressed");
      localStorage.removeItem(LS_SITE_COMPRESSED_KEY);
    }
  }, [compressed]);

  const toggleCompressed = () => {
    setCompressed((prev) => !prev);
  };

  return (
    <CompressContext.Provider value={{ compressed, toggleCompressed }}>
      {children}
    </CompressContext.Provider>
  );
};