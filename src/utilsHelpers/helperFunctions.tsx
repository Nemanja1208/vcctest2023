import { fetchAllCars } from "./apiMethodsAndCalls/fetchAllCarsMethod";
import { Car, parametersToReRender } from "./types";

export const returnUniqueCarBodytypes = (allCars: Car[]) => {
    const allCarBodyTypes = allCars.map((car: Car) => car.bodyType);
    return allCarBodyTypes.filter((element: string, index: number) => {
      return allCarBodyTypes.indexOf(element) === index;
    });
}

export const filterCarsAccordingToBodytype = (allCars: Car[], choosenBodytype: string) => {
  return allCars.filter(cars => cars.bodyType === choosenBodytype)
}

export const returnAllAvailableParametersToReRender = (allCars: Car[]) => {
  return allCars.map((car: parametersToReRender) => ({
    carId: car.id.toString(),
  }))
}

export const findChoosenCarById = (allCars: Car[],carId: string) => {
  return allCars.find(car => car.id === carId);
}