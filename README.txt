Eco-Archive website with automatic sync.

1. In Netlify: Site configuration > Environment variables > add ADMIN_PASSWORD (your admin password).
2. Deploy this folder with Git or the Netlify CLI (drag-and-drop deploys skip the sync service):
     npm install
     npx netlify-cli deploy --prod --dir . --functions netlify/functions
   (run both inside this folder; the first deploy asks you to log in and pick your site)
3. On the site, click the greenhouse 4 times and enter the password.
