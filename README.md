# Multiplication Table

The input still supports positive, negative, and empty values and renders the multiplication grid.

Requires Node.js 22.12 or newer.

- `npm ci`: install the locked dependencies.
- `npm start`: start the development server on port 3000.
- `npm run test:run`: run the regression tests.
- `npm test`: run tests in watch mode.
- `npm run build`: generate the production site in `build/`.

Vite replaces Create React App and its retired dependency tree. React 16 remains in place; Bootstrap and Reactstrap are upgraded together. Build and test configuration is in `vite.config.mjs`.

Production builds retain offline loading. The build generates `service-worker.js` from `service-worker.template.js`, precaches the generated assets, and versions the cache by content. Once a visitor has loaded the production site online, navigation falls back to the cached app shell when offline. Serve over HTTPS or localhost to enable service workers. New workers activate after the previous app tabs close. Development mode does not register a service worker.
