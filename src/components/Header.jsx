import React from "react";
import { useThemeContext } from "../context/ThemeContext";

export const Header = () => {
  const { darkTheme, toggleTheme } = useThemeContext();
  return (
    <div className="flex flex-row justify-between items-start">
      <div>
        <h1 className=" text-white font-bold tracking-widest text-xl sm:text-3xl">
          TODO
        </h1>
      </div>
      <div>
        <button onClick={() => toggleTheme()}>
          {darkTheme ? (
            <img src="/images/icon-sun.svg" alt="" />
          ) : (
            <img src="/images/icon-moon.svg" alt="" />
          )}
        </button>
      </div>
    </div>
  );
};
