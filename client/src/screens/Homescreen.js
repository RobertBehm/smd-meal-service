import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMeals } from "../actions/mealActions";
import Error from "../components/Error";
import Filter from "../components/Filter";
import Loading from "../components/Loading";
import Meal from "../components/Meal";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Homescreen() {
  const dispatch = useDispatch();

  const mealsstate = useSelector((state) => state.getAllMealsReducer);

  const { meals, error, loading } = mealsstate;

  useEffect(() => {
    dispatch(getAllMeals());
  }, []);

  return (
    <>
      <div>
        <Hero />
        <Filter />
        <div className="row justify-content-center">
          {loading ? (
            <Loading />
          ) : error ? (
            <Error error="Something went wrong" />
          ) : (
            meals.map((meal) => {
              return (
                <div className="col-md-3 m-3" key={meal._id}>
                  <div>
                    <Meal meal={meal} />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
