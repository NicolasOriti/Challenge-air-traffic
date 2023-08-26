const fs = require('fs');
const path = require('path');

const PATH_FILE = path.join(__dirname, 'data', 'air_traffic.csv');

const mainFunction = () => {
  fs.readFile(PATH_FILE, 'utf-8', (err, data) => {
    let counter = 0;
    if (err) {
      return console.error(err);
    }

    const arrayLines = data.split('\n');

    for (const key in arrayLines) {
      const line = arrayLines[key];
      if (line.includes('A320')) counter += 1;
    }

    console.log(counter);
  });
};

mainFunction();
