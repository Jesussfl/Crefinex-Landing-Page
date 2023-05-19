import { createContext, useContext, memo } from "react";
import { useQuery } from "react-query";
import { loadSheetData } from "../services/googleSheetAPI";
import { SplashScreen } from "../components/index";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = memo(function ({ children }) {
   const data = [];
   // const { isLoading, data } = useQuery("data", getData);
   // if (isLoading || !data) {
   //    return <SplashScreen />;
   // }

   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
});

async function getData() {
   await gapi.load("client");

   const headerData = await loadSheetData("Cabecera", "A:B");

   return {
      headerData,
   };
}

export function getDataFromContext(location, id, data) {
   const { coursesData, resourcesData } = data;
   const dataToReturn = type === "cursos" ? coursesData[id - 1] : resourcesData[id - 1];
   return dataToReturn;
}

export default DataProvider;
