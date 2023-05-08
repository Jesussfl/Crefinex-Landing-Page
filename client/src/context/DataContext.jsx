import { createContext, useContext, memo } from "react";
import { useQuery } from "react-query";
import { loadSheetData } from "../services/googleSheetAPI";
import { SplashScreen } from "../components/index";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = memo(function ({ children }) {
   const { isLoading, data, error } = useQuery("data", getData);
   if (isLoading || !data) {
      return <SplashScreen />;
   }

   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
});

async function getData() {
   await gapi.load("client");
   console.log("Fetcheando");

   const headerData = await loadSheetData("Cabecera", "A:B");
   const coursesData = await loadSheetData("Cursos", "A:H");
   const resourcesData = await loadSheetData("Recursos", "A:G");
   const locationData = await loadSheetData("Ubicacion", "A:B");
   return {
      headerData,
      coursesData,
      resourcesData,
      locationData,
   };
}

export function getDataFromContext(location, id, data) {
   const routeParts = location.pathname.split("/");
   const routeName = routeParts[2];
   const type = routeName === "cursos" ? "cursos" : "libros";
   const { coursesData, resourcesData } = data;
   const dataToReturn =
      type === "cursos" ? coursesData[id - 1] : resourcesData[id - 1];
   return dataToReturn;
}

export default DataProvider;
