import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import MealList from "./components/Meals/MealList";
import MealDetails from "./components/MealDetails/MealDetails";

const router = new createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <Meals />,
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        children: [
          {
            path: "/meals/:category",
            element: <MealList />,
            loader: ({ params }) =>
              fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`
              ),
          },
        ],
      },
      {
        path: "/meal/:mealID",
        element: <MealDetails />,
        loader: ({ params }) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealID}`
          ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
