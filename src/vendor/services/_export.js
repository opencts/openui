import { objectToMap } from "./utils";
import { utils, writeFile } from 'xlsx';

/**
 * 
 * @param {object[]} data Values to export (array of objects)
 * @param {string} format File format, one of ['xlsx', 'csv']
 * @param {string} sheetName The name of the sheet in excel generatedFile
 * @param {string} fileName The name of the downloaded file
 */
export function XLSExport(data, format, sheetName, fileName) {
    const aoa = objectToMap(data);
    const worksheet = utils.aoa_to_sheet(aoa);
    const workbook = utils.book_new();
    utils.book_append_sheet(workbook, worksheet, sheetName);
    writeFile(workbook, fileName + '.' + format);
}