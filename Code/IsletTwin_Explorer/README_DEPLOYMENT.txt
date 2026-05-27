IsletTwin Explorer Cloudflare Pages deployment folder

Upload the contents of this folder to Cloudflare Pages:

index.html
app.js
styles.css
data/

Do not upload local asset folders to Pages. Images are loaded from Cloudflare R2 through:

https://assets.synbioelab.com/assets_optimized/

If the R2 path changes, update assetConfig near the top of app.js.
