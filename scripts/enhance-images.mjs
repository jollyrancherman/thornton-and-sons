import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public', 'images');

const imageFolders = ['services', 'kitchen', 'living', 'bathroom', 'custom'];

async function enhanceImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .modulate({
        brightness: 1.02,
        saturation: 1.05,
      })
      .gamma(1.1)
      .jpeg({ quality: 92, mozjpeg: true })
      .toFile(outputPath);

    console.log(`Enhanced: ${basename(outputPath)}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
  }
}

async function processFolder(folderName) {
  const folderPath = join(publicDir, folderName);

  try {
    const files = await readdir(folderPath);
    const imageFiles = files.filter(f =>
      /\.(jpg|jpeg|png|webp)$/i.test(f) && !f.includes('_enhanced')
    );

    for (const file of imageFiles) {
      const inputPath = join(folderPath, file);
      const ext = file.substring(file.lastIndexOf('.'));
      const nameWithoutExt = file.substring(0, file.lastIndexOf('.'));
      const outputPath = join(folderPath, `${nameWithoutExt}_enhanced${ext}`);

      await enhanceImage(inputPath, outputPath);
    }
  } catch (error) {
    console.error(`Error processing folder ${folderName}:`, error.message);
  }
}

async function main() {
  console.log('Starting image enhancement...\n');

  for (const folder of imageFolders) {
    console.log(`\nProcessing ${folder}/`);
    await processFolder(folder);
  }

  console.log('\nImage enhancement complete!');
}

main();
