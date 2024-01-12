interface FetchCarsProps {
  manufacturer: string;
  model: string;
  year: number;
  fuel: string;
  limit: number;
}

export async function fetchCars({
  manufacturer,
  model,
  year,
  fuel,
  limit,
}: FetchCarsProps) {
  const headers = {
    "X-RapidAPI-Key": "12dc1925c8msh4a7e2f1bcf9544cp151224jsnd79a18209520",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50; /* Base rental price per day in dollars */

  const mileageFactor = 0.1; /* Additional rate per mile driven */

  const ageFactor = 0.05; /* Additional rate per year of vehicle age */

  /* Calculate additional rate based on mileage and age */
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  /* Calculate total rental rate per day */
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
