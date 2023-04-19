import { API_KEY, SPREADSHEET_ID } from "../../../config";

export function loadSheetData(sheetName, range) {
  return (
    window.gapi.client
      .init({
        apiKey: API_KEY,
        discoveryDocs: [
          "https://sheets.googleapis.com/$discovery/rest?version=v4",
        ],
      })
      .then(() => {
        return gapi.client.sheets.spreadsheets.values.get({
          spreadsheetId: SPREADSHEET_ID,
          range: `${sheetName}!${range}`,
        });
      })
      // .then((response) => {
      //   const [headers, ...rows] = response.result.values;
      //   return rows.reduce((acc, row) => {
      //     const obj = {};
      //     headers.forEach((header, i) => {
      //       obj[header] = row[i];
      //     });
      //     acc.push(obj);
      //     return acc;
      //   }, []);
      // });
      .then((response) => {
        return response.result.values;
      })
  );
}
