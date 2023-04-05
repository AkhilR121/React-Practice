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

```

If you don't have curl installed, use wget:

```bash
wget -qO- https://get.pnpm.io/install.sh | sh -
```

### Install `node`

Run the following command(if using powershell, run as administrator):

```bash
pnpm env use --global latest
```

Install packages globally:

```bash
pnpm install -g degit ndb @antfu/ni tsx turbo vite-node typescript eslint prettier
```

### Install Editor

Install `visual studio code` with the following `winget` command:

```powershell
winget install --id Microsoft.VisualStudioCode
```

### Automatic setup

Alternatively, or even preferably use the instructions at
[dotfiles](https://github.com/pervezfunctor/mini-dotfiles.git) to setup your
Ubuntu/WSL environment.

If you are on Windows 11, install WSL 2 first.

```powershell
  wsl --install -d Ubuntu
```

For more details refer to
[wsl install](https://learn.microsoft.com/en-us/windows/wsl/install)

## Setup repository

Clone the repository:

```bash
git clone https://pervezfunctor/fullstack-training.git
cd fullstack-training
```

Install dependencies:

```bash
pnpm install
```

## Common commands

To run app(development server):

```bash
pnpm dev
```

**Open [http://localhost:5173](http://localhost:5173)**

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

2. Make sure prettier is working in vscode. If not, install the prettier
   extension.

3. Make sure you don't have any eslint errors. If you do, fix them. Install the
   eslint extension if you don't have it. Run the following command to check for
   eslint errors.

   ```bash
   pnpm lint
   ```

4. Make sure you have a test for every function you write. Also make sure you
   have no test failures. Run the following command to check for test failures.

   ```bash
   pnpm test
   ```

5. Make sure you have no typescript errors. You can check type errors with the
   following command. Only use `any` as a last resort. Run the following command to check for type errors.

   ```bash
   pnpm types
   ```

6. Make sure to use `zod` specifications to validate input errors which can't be
   enforced by typescript.

7. Always write test cases for boundary conditions. Some examples are empty
   arrays or empty objects, 0, '', and where needed null, undefined, etc.

8. Unless you need state, prefer `Iterable` to arrays.

9. Prefer using higher order functions like `map`, `filter`, `reduce`
   over for loops.

10. Prefer using higher order functions like `map`, `filter`, `reduce`
    over for loops.

11. Prefer for-of loop to iterate over iterables including arrays and sets.

12. Use for-of(over Object.keys) instead of for-in loop.

13. Prefer readonly arrays and readonly objects

14. Almost always specify return types for functions.
