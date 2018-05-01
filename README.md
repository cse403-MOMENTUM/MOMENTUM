# MOMENTUM
User manual: https://github.com/cse403-MOMENTUM/MOMENTUM/blob/master/user-manual.md

Project: https://cse403-momentum.github.io/MOMENTUM/

Initialized with https://github.com/Microsoft/TypeScript-React-Starter. Check that link for details about specific files.

Info about React: https://reactjs.org/tutorial/tutorial.html

Info about TypeScript: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

Info about Semantic UI React: https://react.semantic-ui.com/introduction

# Organization
`momentum/index.tsx` is the main file

`momentum/components` contains components (`*.tsx`) which can be included in `index.tsx`

`momentum/data` contains data that components and `index.tsx` can use

`momentum/styles` contains CSS files (`*.css`)

`momentum/tests` contains test files (`*.test.tsx`)

`momentum/components/App.tsx` contains an example component

# How to get setup (assuming macOS).
1. Install HomeBrew
2. Install Node: `brew install node`
3. (This step may not be necessary. Try it without this!) Install TypeScript: `npm i -g typescript`
4. Navigate to `momentum` and run `npm install`

The setup above is probably incomplete. Let Josh know about setup issues.

The project was tested using VSCode . YMMV with other tools.

# Using VSCode
VSCode is a useful, general-purpose IDE. There are lots of extensions available and linting, debugging, version control, etc. are all integrated. Once you've installed VSCode, familiarize yourself with the sidebar.

1. `brew tap caskroom/cask`
2. `brew cask install visual-studio-code`
3. Follow this to launch VSCode from terminal/command line: https://code.visualstudio.com/docs/setup/mac#_launching-from-the-command-line
4. To open MOMENTUM run `code .` from this directory.
5. Install these useful extensions (add more if you find other helpful ones):

**Super Useful**
- Bracket Pair Colorizer
- TSLint
- npm
- npm Intellisense

**May Be Useful**
- Code Spell Checker
- TypeScript Hero
- TypeScript Importer

# Running
From `/momentum`:
- `npm start` starts the dev server (use this for development). the site will update automatically when you edit files
- `npm test` runs tests
- `npm run deploy` builds the site **and pushes to gh-pages branch**
- `npm install` installs dependencies
