import { useQuery } from "react-query";
import { getData } from "../../../services/googleSheetAPI";
export function useBooksQuery() {
   return useQuery("books", () => getData("Libros", "A:H"));
}
