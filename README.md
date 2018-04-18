# MOMENTUM
https://cse403-momentum.github.io/MOMENTUM/

Initialized with https://github.com/Microsoft/TypeScript-React-Starter. Check that link for details about specific files.

Info about React: https://reactjs.org/tutorial/tutorial.html
Info about TypeScript: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

# Organization
`momentum/index.tsx` is the main file

`momentum/components` contains components which can be include in `index.tsx`

`momentum/data` contains data that components and `index.tsx` can use

`momentum/components/App` contains an example component

# How to get setup (assuming macOS).
1. Install HomeBrew
2. Install Node: `brew install node`
3. Install TypeScript: `npm i -g typescript`

The setup above is probably incomplete. Let Josh know about setup issues.

The project was tested using VSCode . YMMV with other tools.

# Running
From `/momentum`:
- `npm start` starts the dev server (use this for development). the site will update automatically when you edit files
- `npm test` runs tests
- `npm run deploy` builds the site **and pushes to gh-pages branch**
