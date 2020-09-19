/**
 * Create a new recipe for your service
 */
const fs = require('fs-extra');
const path = require('path');
const open = require('open');

if (process.argv.length < 3) {
  console.log(`Usage: npm run create <Recipe name> [Folder name]
For example:
npm run create WhatsApp
npm run create "Google Hangouts"
You can set "Folder name" to "FerdiDev" to use Ferdi's development instance instead:

npm run create WhatsApp FerdiDev
`);
  return;
}

const recipeName = process.argv[2];
const recipe = recipeName.toLowerCase().replace(/\s/g, '-');
const cleanRecipeId = recipe.replace(/[^a-z]/g, ''); // Clean recipe ID only containing a-z, for usage as the JavaScript class name
const folderName = process.argv[3] || 'Ferdi';
const filesThatNeedTextReplace = ['package.json', 'index.js', 'README.md'];

(async () => {
  // Folder paths
  const userData = process.env.APPDATA || (process.platform == 'darwin' ? process.env.HOME + '/Library/Application Support' : process.env.HOME + "/.config");
  const recipesFolder = path.join(userData, folderName, "recipes");
  const devRecipeFolder = path.join(recipesFolder, "dev");
  const newRecipeFolder = path.join(devRecipeFolder, recipe);
  const sampleRecipe = path.join(__dirname, 'sample_recipe');

  // Make sure dev recipe folder exists
  if (!await fs.exists(recipesFolder)) {
    console.log(`Couldn't find your recipe folder (${recipesFolder}). Is Ferdi installed?`);
    return;
  }
  await fs.ensureDir(devRecipeFolder);

  if (await fs.exists(newRecipeFolder)) {
    console.log('⚠️ Recipe already exists');
    return;
  } 

  console.log('[Info] Passed pre-checks');

  // Copy sample recipe to recipe folder
  await fs.copy(sampleRecipe, newRecipeFolder);
  console.log('[Info] Copied recipe');

  // Replace "SERVICE" with the service name
  for (const file of filesThatNeedTextReplace) {
    const filePath = path.join(newRecipeFolder, file);
    let contents = await fs.readFile(filePath, 'utf-8');
    contents = contents.replace(/SERVICE/g, recipe);
    contents = contents.replace(/SNAME/g, recipeName);
    contents = contents.replace(/SCLEAN/g, cleanRecipeId);
    await fs.writeFile(filePath, contents);
  }
  console.log('[Info] Prepared new recipe');

  open(newRecipeFolder);
  console.log(`✅ Successfully created your recipe.
  
What's next?
- Make sure you restart Ferdi in order for the recipe to show up
- Customise "webview.js", "package.json", "icon.svg" and "icon.png (see https://github.com/getferdi/recipes/blob/master/docs/integration.md#recipe-structure)
- Publish your recipe (see https://github.com/getferdi/recipes/blob/master/docs/integration.md#publishing)`);
})();
