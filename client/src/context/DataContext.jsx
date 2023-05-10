import { createContext, useContext, memo } from "react";
import { useQuery } from "react-query";
import { loadSheetData } from "../services/googleSheetAPI";
import { SplashScreen } from "../components/index";

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export const DataProvider = memo(function ({ children }) {
   const { isLoading, data } = useQuery("data", getData);
   if (isLoading || !data) {
      return <SplashScreen />;
   }

   return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
});

async function getData() {
   await gapi.load("client");

   const headerData = await loadSheetData("Cabecera", "A:B");
   const coursesData = await loadSheetData("Cursos", "A:J");
   const booksData = await loadSheetData("Libros", "A:H");
   const locationData = await loadSheetData("Ubicacion", "A:B");
   const faqsOnline = await loadSheetData("Preguntas Frecuentes - Cursos Online", "A:C");
   const faqsOnSite = await loadSheetData("Preguntas Frecuentes - Cursos Presenciales", "A:C");
   const booksFaqs = await loadSheetData("Preguntas Frecuentes - Libros", "A:C");
   return {
      headerData,
      coursesData,
      booksData,
      locationData,
      faqsOnline,
      faqsOnSite,
      booksFaqs,
   };
}

export function getDataFromContext(location, id, data) {
   const { coursesData, resourcesData } = data;
   const dataToReturn = type === "cursos" ? coursesData[id - 1] : resourcesData[id - 1];
   return dataToReturn;
}

export default DataProvider;
