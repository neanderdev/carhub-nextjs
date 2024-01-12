"use client";

import { useEffect, useState } from "react";

import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";

import { fuels, yearsOfProduction } from "@/constants";

import { fetchCars } from "@/utils";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    async function getCars() {
      setLoading(true);

      try {
        const result = await fetchCars({
          manufacturer: manufacturer || "",
          model: model || "",
          year: year || 2023,
          fuel: fuel || "",
          limit: limit || 10,
        });

        setAllCars(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>

          <p>Explore the cars you night like</p>
        </div>

        <div className="home__filters">
          <SearchBar
            setManufacturer={setManufacturer}
            setModel={setModel}
          />

          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
              options={fuels}
              setFilter={setFuel}
            />

            <CustomFilter
              title="year"
              options={yearsOfProduction}
              setFilter={setYear}
            />
          </div>
        </div>

        {
          !isDataEmpty
            // allCars.length > 0
            ? (
              <section>
                <div className="home__cars-wrapper">
                  {allCars?.map((car, index) =>
                    <CarCard car={car} key={index} />
                  )}
                </div>

                {
                  loading && (
                    <div className="mt-16 w-full flex-center">
                      <div
                        className="h-20 w-20 animate-spin rounded-full border-4 border-dashed border-primary-blue border-t-transparent"
                      />
                    </div>
                  )
                }

                <ShowMore
                  pageNumber={limit / 10}
                  isNext={limit > allCars.length}
                  setLimit={setLimit}
                />
              </section>
            )
            : (
              <div className="home__error-container">
                <h2 className="text-black text-xl font-bold">Oops, no results</h2>

                <p>{allCars?.error}</p>
              </div>
            )
        }
      </div>
    </main>
  )
}
