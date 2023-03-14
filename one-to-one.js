const sharp = require('sharp');
const fs = require('fs');

const ImageTypes = [
  {
    name: 'sq_sm_2x',
    //adjust pixel
    size: 750,
  },
];

const inputFolder = 'imgs/';
const outputFolder = 'output/';

// Read the contents of the input folder
fs.readdir(inputFolder, (err, files) => {
  if (err) throw err;

  // Loop through each file in the folder
  files.forEach(file => {
    if (file.endsWith('.JPG') || file.endsWith('.PNG')) {
      const oldPath = inputFolder + file;
      const newPath = inputFolder + file.toLowerCase();
      fs.rename(oldPath, newPath, err => {
        if (err) throw err;
        
        const source = sharp(newPath).rotate();

        source.metadata().then(({ width, height }) => {
          for (let { name, size } of ImageTypes) {
            const adjustedSize = name.startsWith('sq_') ? Math.min(width, height, size) : size;
            source.resize(adjustedSize, adjustedSize, {
                withoutEnlargement: true,
                fit: name.startsWith('sq_') ? 'cover' : 'inside',
              })
              .jpeg()
              .toFile(`${outputFolder}${file}.jpg`, (err, info) => {
                if (err) throw err;
                console.log(`${newPath} processed for ${name}`);
              });
          }
        });
      });
    }
  });
});
