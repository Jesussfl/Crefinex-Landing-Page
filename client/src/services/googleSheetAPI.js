import { API_KEY, SPREADSHEET_ID } from "../../config";

export async function loadSheetData(sheetName = "Sheet1", range = "A1:Z1000") {
  await window.gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
  });
  const response = await window.gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!${range}`,
  });
  const headers = response.result.values[0];
  const data = response.result.values.slice(1);

  const jsonData = data.map((row) => {
    return headers.reduce((acc, curr, index) => {
      acc[curr] = row[index];
      return acc;
    }, {});
  });

  return jsonData.length === 1 ? jsonData[0] : jsonData;
}
