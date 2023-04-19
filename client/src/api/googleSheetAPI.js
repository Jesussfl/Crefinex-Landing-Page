import { API_KEY, SPREADSHEET_ID } from "../../../config";

export function loadSheetData(range) {
  return window.gapi.client
    .init({
      apiKey: API_KEY,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4",
      ],
    })
    .then(() => {
      return gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: range,
      });
    })
    .then((response) => {
      return response.result.values;
    });
}
