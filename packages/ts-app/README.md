# Getting Started

## Working on DOM assignments and React

Now you could add html files to `src/pages` folder. Add Typescript code to `src` folder like before. For example

```bash
touch pages/foo.html
touch src/foo.ts
```

Contents of `pages/foo.html` could be

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Full Stack Training</title>
  </head>

  <body>
    <div id="root"></div>
    <script type="module" src="../src/foo.ts"></script>
  </body>
</html>
```

If server is already running, press `Ctrl+C` to stop it. Start it again using the following command

```bash
pnpm html
```

You could view this page in browser at url `http://localhost:1234/foo.html`

Any changes you make to either html or typescript file, should be reflected immediately in the browser.

You might have to restart server every time you add an html page.
