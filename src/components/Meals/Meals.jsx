import React, { useEffect } from "react";
import Category from "../Category/Category";
import { useState } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";

const Meals = () => {
  const navigate = useNavigate();
  const mealData = useLoaderData();

  useEffect(() => {
    navigate(`/meals/Beef`);
  }, []);

  const [curCategory, setCurCategory] = useState("Beef");

  return (
    <div className="w-[90%] mx-auto text-white">
      <Category
        mealData={mealData.categories}
        setCurCategory={setCurCategory}
        curCategory={curCategory}
      />
      <Outlet />
    </div>
  );
};

export default Meals;
