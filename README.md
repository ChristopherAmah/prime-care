# PrimeCare Medical Transport

React 19, Vite, and Tailwind CSS 4 using JavaScript and JSX.

Run `npm install`, then `npm run dev` and open the URL printed by Vite.
Use Node.js 22.12 or newer. Run `npm run build` for a production build,
`npm run preview` to preview it, and `npm run lint` to check the code.

Edit page sections and content in `src/App.jsx`. The Tailwind theme and
component styles are in `src/index.css`; you can also use utilities directly
in JSX. `src/main.jsx` mounts React; `index.html` holds metadata and fonts.
The original HTML and supplied images remain in `src/imports/` for reference.

The copied stylesheet contained JSX. Responsive styles were rebuilt using
the original navy/green palette; they are not a pixel-exact Figma export.
The app no longer depends on Figma's preview configuration.
Tailwind setup follows https://tailwindcss.com/docs/installation/using-vite.

Booking links open phone, email, or WhatsApp; there is no booking backend.
Newsletter updates use email requests, and article cards lead to contact.
Footer legal and social URLs still need real destinations. Stock photos
and Google Fonts require an internet connection.

## Original template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
