import { useQuery } from "react-query";
import { getData } from "../../../services/googleSheetAPI";
export function useCoursesQuery() {
   return useQuery("courses", () => getData("Cursos", "A:J"));
}
