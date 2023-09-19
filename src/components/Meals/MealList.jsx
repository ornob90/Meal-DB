import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MealList = () => {
  const { category } = useParams();
  const meals = useLoaderData();
  console.log(meals);

  return (
    <div className=" gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
      {meals.meals.map(({ idMeal, strMeal, strMealThumb }, idx) => (
        <div
          kye={idx}
          className="flex flex-col  justify-between rounded-lg border p-2 border-white h-[400px]"
        >
          <div className="w-full h-[200px]">
            <img
              src={strMealThumb}
              alt=""
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="">
            <p className="font-bold text-xl ">{strMeal}</p>
          </div>
          <div>
            <button className=" bg-rose-600 py-2 px-4 rounded-lg text-sm">
              Show Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealList;
