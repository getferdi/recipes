/**
 * Verify all archived recipes to match uncompressed recipes
 */
const targz = require('targz');
const fs = require('fs-extra');
const dircompare = require('dir-compare');
const path = require('path');

// Helper: Compress src folder into dest file
const decompress = (src, dest) => new Promise((resolve, reject) => {
  targz.decompress({
    src,
    dest,
    tar: {
      // Don't unpackage .DS_Store files
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

// Let Promise errors crash the script
process.on('unhandledRejection', (error) => {
  console.log('Promise rejection:', error);
  process.exit(1);
});

// Let us work in an async environment
(async () => {
  // Read list of all recipes
  const allJsonPath = path.join(__dirname, '../', 'all.json');
  const all = await fs.readJSON(allJsonPath);
  
  const tempUncompressed = path.join(__dirname, `uncompressed/`);

  for (const recipeInfo of all) {
    try {
      // Get recipe infos
      const recipe = recipeInfo.id;
      const recipeNum = all.findIndex(e => e === recipeInfo);
      const compressedRecipe = path.join(__dirname, '../', `${recipe}.tar.gz`);
      const uncompressedRecipe = path.join(__dirname, '../', 'uncompressed', recipe);

      // Check that recipe exists
      if (!await fs.pathExists(compressedRecipe) || !await fs.pathExists(uncompressedRecipe)) {
        console.log(`Error: Recipe "${recipe}" exists in all.json but not found.`);
        process.exit(1);
      }

      // Clear temporary extraction folder
      if (await fs.pathExists(tempUncompressed)) {
        await fs.remove(tempUncompressed);
      }
      await fs.mkdir(tempUncompressed);

      // Package to uncompressed recipe to .tar.gz
      await decompress(compressedRecipe, tempUncompressed);

      // Compare directories
      const compare = await dircompare.compare(uncompressedRecipe, tempUncompressed, {
        compareContent: true,
        // Don't fail because of DS_Store files
        excludeFilter: '.DS_Store',
      });

      if (compare.same) {
        console.log(`✓ ${recipe} is valid (${recipeNum + 1} of ${all.length})`);
      } else {
        console.log(`❌ Compressed and uncompressed files for "${recipe}" are NOT equal:`);

        // Output information about differences
        for (const file of compare.diffSet) {
          if (file.state !== 'equal') {
            console.log(`- "${file.name1 || file.name2}" is not equal (${file.type1} in uncompressed, ${file.type2} in archive)`);
          }
        }

        process.exit(1);
      }

      // Remove temporary compressed file
      await fs.remove(tempUncompressed);
    } catch(e) {
      console.log('Error while verifying recipe:', e);
      process.exit(1);
    }
  }

  console.log('All recipes are valid.');
})();
