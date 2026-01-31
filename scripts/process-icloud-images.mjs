import sharp from 'sharp';
import { readdir, mkdir, copyFile } from 'fs/promises';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const icloudDir = join(__dirname, '..', 'iCloud Photos from Sandy Thornton', 'iCloud Photos from Sandy Thornton');
const publicDir = join(__dirname, '..', 'public', 'images');

// Image assignments based on visual review
const imageAssignments = {
  kitchen: [
    'IMG_1371.JPG',    // Dark kitchen with hood
    'IMG_1500.JPG',    // Open kitchen with island
    'IMG_0119.JPG',    // Cabinet detail
    'IMG_1369.JPG',    // Kitchen
    'IMG_1370.JPEG',   // Kitchen
    'IMG_1374.JPEG',   // Kitchen
    'IMG_1375.JPEG',   // Kitchen
    'IMG_1377.JPG',    // Kitchen
  ],
  living: [
    'IMG_1507.JPG',    // Fireplace built-ins
    'IMG_1503.JPG',    // Living room
    'IMG_1504.JPG',    // Living room
    'IMG_1505.JPG',    // Living room
    'IMG_1506.JPG',    // Living room
    'IMG_1510.JPG',    // Living room
  ],
  bathroom: [
    'IMG_0127.JPEG',   // Bathroom
    'IMG_0128.JPEG',   // Bathroom
    'IMG_0129.JPG',    // Bathroom
  ],
  services: [
    'IMG_0101.JPG',    // Island detail (kitchen cabinets service)
    'IMG_0097.JPG',    // Closet drawers (storage service)
    'IMG_1511.JPG',    // Fireplace/mantel (den service)
    'IMG_0112.JPG',    // Trim detail
    'IMG_0113.JPG',    // Door detail
    'IMG_0114.JPG',    // Installation
  ],
  custom: [
    'IMG_5519.JPG',    // Custom coffin/engraved piece
    'IMG_9352.JPG',    // Custom box
    'IMG_5520.JPG',    // Custom work
  ]
};

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .modulate({ brightness: 1.02, saturation: 1.05 })
      .gamma(1.1)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(outputPath);
    console.log(`Processed: ${basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function main() {
  // Ensure directories exist
  for (const category of Object.keys(imageAssignments)) {
    const dir = join(publicDir, category);
    await mkdir(dir, { recursive: true });
  }

  // Process each category
  for (const [category, images] of Object.entries(imageAssignments)) {
    console.log(`\nProcessing ${category}/`);

    for (let i = 0; i < images.length; i++) {
      const imageName = images[i];
      const inputPath = join(icloudDir, imageName);
      const outputName = `${category}-${i + 1}_enhanced.jpg`;
      const outputPath = join(publicDir, category, outputName);

      await processImage(inputPath, outputPath);
    }
  }

  console.log('\nImage processing complete!');
}

main();
