import fs from "fs";
import path from "path";
import sharp from "sharp";

const assetsPath = path.join(process.cwd(), "public", "assets");
const srcPath = path.join(process.cwd(), "src" , "components"); // code files ka folder

// 📌 Step 1: Convert images
function convertImages(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertImages(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (ext === ".png" || ext === ".jpg" || ext === ".jpeg") {
        const outputFile = fullPath.replace(ext, ".webp");

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputFile)
          .then(() => {
            console.log(`✅ Converted: ${file} → ${path.basename(outputFile)}`);
            updateImportPaths(file, outputFile);
          })
          .catch(err => {
            console.error(`❌ Error converting ${file}:`, err);
          });
      }
    }
  });
}

// 📌 Step 2: Replace imports in code
function updateImportPaths(oldFile, newFile) {
  const oldExt = path.extname(oldFile);
  const oldBase = path.basename(oldFile);
  const newBase = path.basename(newFile);

  function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, "utf8");
    const regex = new RegExp(oldBase.replace(oldExt, oldExt), "g");
    if (content.includes(oldBase)) {
      content = content.replaceAll(oldBase, newBase);
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`🔄 Updated import in: ${filePath}`);
    }
  }

  function scanDir(dir) {
    fs.readdirSync(dir).forEach(f => {
      const full = path.join(dir, f);
      if (fs.statSync(full).isDirectory()) {
        scanDir(full);
      } else if (/\.(js|jsx|ts|tsx)$/.test(f)) {
        replaceInFile(full);
      }
    });
  }

  scanDir(srcPath);
}

convertImages(assetsPath);
