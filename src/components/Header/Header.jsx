import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="w-[90%] mx-auto flex gap-10 text-white text-xl pt-4 justify-center">
      <Link to="/meals/Beef">Meal</Link>
    </nav>
  );
};

export default Header;
