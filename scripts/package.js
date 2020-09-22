/**
 * Package all recipes
 */
const targz = require('targz');
const fs = require('fs-extra');
const path = require('path');
const sizeOf = require('image-size');

// Publicly availible link to this repository's recipe folder
// Used for generating public icon URLs
const repo = 'https://cdn.jsdelivr.net/gh/getferdi/recipes/recipes/';

// Helper: Compress src folder into dest file
const compress = (src, dest) => new Promise((resolve, reject) => {
  targz.compress({
    src,
    dest,
    tar: {
      // Don't package .DS_Store files
      ignore: function(name) {
          return path.basename(name) === '.DS_Store'
      }
    },
  }, (err) => {
    if (err) {
      reject(err);
    } else {
      resolve(dest);
    }
  });
});

// Let us work in an async environment
(async () => {
  // Create paths to important files
  const recipesFolder = path.join(__dirname, '../recipes');
  const outputFolder = path.join(__dirname, '../archives');
  const allJson = path.join(__dirname, '../all.json');
  const featuredFile = path.join(__dirname, '../featured.json');
  const featuredRecipes = await fs.readJSON(featuredFile);
  let recipeList = [];
  let unsuccessful = 0;

  await fs.ensureDir(outputFolder);
  await fs.emptyDir(outputFolder);
  await fs.remove(allJson);

  const availableRecipes = fs.readdirSync(recipesFolder, { withFileTypes: true })
    .filter(dir => dir.isDirectory())
    .map(dir => dir.name);

  for(let recipe of availableRecipes) {
    const recipeSrc = path.join(recipesFolder, recipe);
    const packageJson = path.join(recipeSrc, 'package.json');
    const svgIcon = path.join(recipeSrc, 'icon.svg');
    const pngIcon = path.join(recipeSrc, 'icon.png');
  
    // Check that package.json exists
    if (!await fs.pathExists(packageJson)) {
      console.log(`⚠️ Couldn't package "${recipe}": Folder doesn't contain a "package.json".`);
      unsuccessful++;
      continue;
    }
  
    // Check that icons exist
    const hasSvg = await fs.pathExists(svgIcon);
    const hasPng = await fs.pathExists(pngIcon);
    if (!hasSvg && !hasPng) {
      console.log(`⚠️ Couldn't package "${recipe}": Recipe doesn't contain an icon SVG and PNG`);
      unsuccessful++;
    } else if (!hasSvg) {
      console.log(`⚠️ Couldn't package "${recipe}": Recipe doesn't contain an icon SVG`);
      unsuccessful++;
      continue;
    } else if (!hasPng) {
      console.log(`⚠️ Couldn't package "${recipe}": Recipe doesn't contain an icon PNG`);
      unsuccessful++;
      continue;
    }

    // Check icons sizes
    const svgSize = sizeOf(svgIcon);
    const svgHasRightSize = svgSize.width === svgSize.height;
    if (!svgHasRightSize) {
      console.log(`⚠️ Couldn't package "${recipe}": Recipe SVG icon isn't a square`);
      unsuccessful++;
      continue;
    }

    const pngSize = sizeOf(pngIcon);
    const pngHasRightSize = pngSize.width === 1024 && pngSize.height === 1024;
    if (!pngHasRightSize) {
      console.log(`⚠️ Couldn't package "${recipe}": Recipe PNG icon dimensions should be 1024x1024`);
      unsuccessful++;
      continue;
    }

    // Read package.json
    const config = await fs.readJson(packageJson)
  
    // Make sure it contains all required fields
    if (!config) {
      console.log(`⚠️ Couldn't package "${recipe}": Could not read or parse "package.json"`);
      unsuccessful++;
      continue;
    }
    let configErrors = [];
    if (!config.id) {
      configErrors.push("The recipe's package.json contains no 'id' field. This field should contain a unique ID made of lowercase letters (a-z), numbers (0-9), hyphens (-), periods (.), and underscores (_)");
    } else if (!/^[a-zA-Z0-9._\-]+$/.test(config.id)) {
      configErrors.push("The recipe's package.json defines an invalid recipe ID. Please make sure the 'id' field only contains lowercase letters (a-z), numbers (0-9), hyphens (-), periods (.), and underscores (_)");
    }
    if (!config.name) {
      configErrors.push("The recipe's package.json contains no 'name' field. This field should contain the name of the service (e.g. 'Google Keep')");
    }
    if (!config.version) {
      configErrors.push("The recipe's package.json contains no 'version' field. This field should contain the a semver-compatible version number for your recipe (e.g. '1.0.0')");
    }
    if (!config.config || typeof config.config !== "object") {
      configErrors.push("The recipe's package.json contains no 'config' object. This field should contain a configuration for your service.");
    }
  
    if (configErrors.length > 0) {
      console.log(`⚠️ Couldn't package "${recipe}": There were errors in the recipe's package.json:
  ${configErrors.reduce((str, err) => `${str}\n${err}`)}`);
      unsuccessful++;
      continue;
    }
  
    if (!await fs.exists(path.join(recipeSrc, 'webview.js'))) {
      console.log(`⚠️ Couldn't package "${recipe}": The recipe doesn't contain a "webview.js"`);
      unsuccessful++;
      continue;
    }
    if (!await fs.exists(path.join(recipeSrc, 'index.js'))) {
      console.log(`⚠️ Couldn't package "${recipe}": The recipe doesn't contain a "index.js"`);
      unsuccessful++;
      continue;
    }
  
    // Package to .tar.gz
    compress(recipeSrc, path.join(outputFolder, `${config.id}.tar.gz`));
  
    // Add recipe to all.json
    const isFeatured = featuredRecipes.includes(config.id);
    const packageInfo = {
      "author": config.author || '',
      "featured": isFeatured,
      "id": config.id,
      "name": config.name,
      "version": config.version || '1.0.0',
      "icons": {
        "png": `${repo}${config.id}/icon.png`,
        "svg": `${repo}${config.id}/icon.svg`,
      },
    };
    recipeList.push(packageInfo);
  }


  // Sort package list alphabetically
  recipeList = recipeList.sort((a, b) => {
    var textA = a.id.toLowerCase();
    var textB = b.id.toLowerCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
  });
  await fs.writeJson(allJson, recipeList, {
    spaces: 2,
    EOL: '\n',
  });

  console.log(`✅ Successfully packaged and added ${recipeList.length} recipes (${unsuccessful} unsuccessful recipes)`);

  if (unsuccessful > 0) {
    process.exit(1);
  }
})();
