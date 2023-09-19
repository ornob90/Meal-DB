import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Category = ({ mealData, setCurCategory }) => {
  return (
    <div className="w-[80%] mx-auto flex justify-center gap-5 text-white mt-10 items-center flex-wrap">
      {mealData?.map(({ idCategory, strCategory }) => (
        <div
          key={idCategory}
          onClick={() => setCurCategory(strCategory)}
          className="bg-rose-600 px-4 py-1 rounded-lg"
        >
          <Link to={`/meals/${strCategory}`}>{strCategory}</Link>
        </div>
      ))}
    </div>
  );
};

export default Category;
