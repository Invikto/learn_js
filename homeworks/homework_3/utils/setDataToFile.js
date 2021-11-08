import fs from 'fs';

export function setDataToFile(file, data) {
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}
