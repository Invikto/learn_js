import fs from 'fs';

export function getDataFromFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file));
  } catch (err) {
    console.error(err);
  }
}
