import fs from "fs";
import path from "path";
import sharp from "sharp";

// Assets folder ka path
const assetsPath = path.join(process.cwd(), "public", "assets");

function convertImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertImages(fullPath); // Agar folder ke andar aur folders hain
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        const outputFile = fullPath.replace(ext, ".webp");

        sharp(fullPath)
          .webp({ quality: 80 }) // Quality 80% rakhi for balance
          .toFile(outputFile)
          .then(() => {
            console.log(`✅ Converted: ${file} → ${path.basename(outputFile)}`);
          })
          .catch(err => {
            console.error(`❌ Error converting ${file}:`, err);
          });
      }
    }
  });
}

convertImages(assetsPath);
