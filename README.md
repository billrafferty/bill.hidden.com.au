# Astro build page of Bill Rafferty's web links

## public URL: [https://bill.hidden.com.au/](https://bill.hidden.com.au/)

```sh
pnpm create astro@latest -- --template basics
pnpm astro add tailwind
pnpm astro add astro-icon
pnpm add @iconify-json/simple-icons

```
## Other online resources used
- [Free SVG Backgrounds and Patterns](https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/)
- [Simple Icons](https://simpleicons.org/)


## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── content/posts
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Links.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Other bits
Using https://www.astroicon.dev/guides/styling/ with [Simple Icons](https://icones.js.org/collection/simple-icons)

Deploying Astro Site to GitHub Pages with Actions [Guid](https://docs.astro.build/en/guides/deploy/github/)

I'm also looking at using https://pagescms.org/ for content management updates after trying out tina.io which looks good but had to be run locally as the admin could not run on static pages.



## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).


```text
Another project on;

    ##    ##  ##  ######   ######   ######  ####    ##
    ##    ##  ##  ##   ##  ##   ##  ##      ## ##   ##
    ########  ##  ##   ##  ##   ##  ####    ##  ##  ##
    ##    ##  ##  ##   ##  ##   ##  ##      ##   ## ##
    ##    ##  ##  ######   ######   ######  ##    ####.com.au

```
