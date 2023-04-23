# Getting Started

## Setup your environment

### Install `pnpm`

On Windows use PowerShell as Administrator

```powershell
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

On Ubuntu/WSL systems

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh - #or
wget -qO- https://get.pnpm.io/install.sh | sh -
```

### Install `node`

Run the following command(if using powershell, run as administrator):

```bash
pnpm env use --global latest
```

### Install visual studio code editor

On Windows, install `visual studio code` with the following `winget` command:

```powershell
winget install --id Microsoft.VisualStudioCode
```

On Ubuntu [download deb](https://code.visualstudio.com/download) file. Install using the following command

```bash
sudo dpkg -i <deb-file-name>.deb
```

### Install google chrome

Install [Google Chrome](https://www.google.com/chrome/). Install [react developer tools](https://react.dev/learn/react-developer-tools).

## Setup repository

Clone the repository:

```bash
git clone https://pervezfunctor/fullstack-training.git --branch=monorepo
cd fullstack-training
```

Install dependencies:

```bash
pnpm install
```

Build libraries

```bash
pnpm build:libs
```

Make sure there are no problems

```bash
pnpm cd
```

Now you should be able to work on any project in `packages` directory using the following instructions. First `cd` into a project for example `react-vanilla`.

```bash
cd packages/react-vanilla
```

## Common commands

Look at the project's `package.json` "scripts" section to understand what these scripts do. If something isn't working, you most probably could fix it in `package.json`

To run app(development server):

```bash
pnpm dev
```

**Open [http://localhost:3000](http://localhost:3000)**

To run tests and watch for changes:

```bash
pnpm test:dev
```

To type check your code:

```bash
pnpm types:dev
```

## Guidelines

1. Always make sure you rebase your branch with the latest changes from the main
   branch every morning.

2. Also make sure, as soon as you rebase your branch to run the following
   command

   ```bash
   pnpm install
   ```

3. Make sure prettier is working in vscode. If not, install the prettier
   extension.

4. Make sure you don't have any eslint errors. If you do, fix them. Install the
   eslint extension if you don't have it. Run the following command to check for
   eslint errors.

   ```bash
   pnpm lint
   ```

5. Make sure you have a test for every function you write. Also make sure you
   have no test failures. Run the following command to check for test failures.

   ```bash
   pnpm test
   ```

6. Make sure you have no typescript errors. You can check type errors with the
   following command. Only use `any` as a last resort. Run the following command to check for type errors.

   ```bash
   pnpm types
   ```

7. Make sure to use `zod` specifications to validate input errors which can't be
   enforced by typescript.

8. Always write test cases for boundary conditions. Some examples are empty
   arrays or empty objects, 0, '', and where needed null, undefined, etc.

9. Unless you need state, prefer `Iterable` to arrays.

10. Prefer using higher order functions like `map`, `filter`, `reduce`
    over for loops.

11. Prefer using higher order functions like `map`, `filter`, `reduce`
    over for loops.

12. Prefer for-of loop to iterate over iterables including arrays and sets.

13. Use for-of(over Object.keys) instead of for-in loop.

14. Prefer readonly arrays and readonly objects

15. Almost always specify return types for functions.
