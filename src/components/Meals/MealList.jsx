import React from "react";
import {
  Link,
  useLoaderData,
  useNavigation,
  useParams,
} from "react-router-dom";

const MealList = () => {
  const { category } = useParams();
  const meals = useLoaderData();
  const navigation = useNavigation();

  return (
    <>
      {navigation.state === "loading" ? (
        <div className="w-full h-[60vh] flex justify-center items-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4">
          {meals.meals.map(({ idMeal, strMeal, strMealThumb }, idx) => (
            <div
              key={idMeal}
              className="flex flex-col  justify-between rounded-lg border p-2 border-white h-[400px]"
            >
              <div className="w-full h-[200px]">
                <img
                  src={strMealThumb}
                  alt=""
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="">
                <p className="text-xl font-bold ">{strMeal}</p>
              </div>
              <div>
                <Link
                  className="px-4 py-2 text-sm rounded-lg bg-rose-600"
                  to={`/meals/${idMeal}`}
                >
                  Show Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default MealList;
