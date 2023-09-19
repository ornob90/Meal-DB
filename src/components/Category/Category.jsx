import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Category = ({ mealData, setCurCategory }) => {
  return (
    <div className="w-[80%] mx-auto flex justify-center gap-5 text-white mt-10 items-center flex-wrap">
      {mealData?.map(({ idCategory, strCategory }) => (
        <div
          key={idCategory}
          onClick={() => setCurCategory(strCategory)}
          className=""
        >
          <NavLink
            to={`/meals/${strCategory}`}
            className={({ isActive }) =>
              `font-bold px-4 py-1 rounded-lg ${
                isActive ? "bg-white text-black" : "bg-rose-600 text-white"
              }`
            }
          >
            {strCategory}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Category;
