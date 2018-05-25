# MOMENTUM
![Corollary to Hofstadter's Law: Every minute you spend thinking about Hofstadter's Law is a minute you're NOT WORKING AND WILL NEVER FINISH! PAAAAAANIIIIIIC!](https://imgs.xkcd.com/comics/estimating_time_2x.png)
*[Estimating Time](https://xkcd.com/1658/) from xkcd licensed under [CC BY-NC 2.5](https://xkcd.com/license.html)*

## Motivation
Programmers have a reputation for being terrible at estimating how long it will take to complete a project <sup>[1] [2] [3]</sup>. This is because developing software is inherently uncertain: there is no way to forecast every detail of a design from the outset, understanding the full requirements of the project as well as the hurdles that an individual will encounter along the way. (If this were the case, developing software would be a trivial task). This is only exacerbated by the fact that a huge number of programming projects are not completed by a single person, but by teams — if an individual can’t predict how long something will take for themselves, what hope does a team have of estimating the completion time for an entire project? Ultimately, this is a problem that can have huge monetary, emotional, and interpersonal costs <sup>[4]</sup>. The reality is that programmers are usually much too optimistic <sup>[1] [2] [3]</sup> — they try to fit too many features into a release, and some have to be cut; they think that they can focus effort in one area of a project because it will be quick, but it ends up taking two, three, four times as long as they had thought initially. Having better time estimates lets us choose how we focus our efforts <sup>[4] [5]</sup>.

We’ve all heard the horror stories about impossible deadlines set by project managers and the botched releases that follow from developers: software development effort estimation is extremely important, but is sometimes not taken very seriously by software teams since it can be difficult to manually estimate how long it will take each person in the team to complete pieces of a project and how this will affect the team as a whole. In-depth project estimation takes significant time and resources as well as consistent participation from the whole team — in other words, it requires a common framework for teams to adhere to. **_Momentum_ is an accessible product that makes effort estimation accessible and accurate for projects with 1-10 people and little to no management.**

<sup>[1] M. Jørgensen, “What We Do and Don’t Know about Software Development Effort Estimation,” IEEE Software, vol. 31, no. 2, pp. 37–40, Mar. 2014.</sup>

<sup>[2] M. Jørgensen, “The effect of the time unit on software development effort estimates,” in 2015 9th International Conference on Software, Knowledge, Information Management and Applications (SKIMA), 2015, pp. 1–5.</sup>

<sup>[3] H. Barki, S. Rivard, and J. Talbot, “Toward an Assessment of Software Development Risk,” Journal of Management Information Systems, vol. 10, no. 2, pp. 203–225, Sep. 1993.</sup>

<sup>[4] I. Benbasat and I. Vessey, “Programmer and Analyst Time/Cost Estimation,” MIS Quarterly, vol. 4, no. 2, pp. 31–43, 1980.</sup>

<sup>[5] K. Srinivasan and D. Fisher, “Machine learning approaches to estimating software development effort,” IEEE Transactions on Software Engineering, vol. 21, no. 2, pp. 126–137, Feb. 1995.</sup>


## Important Links
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
4. Clone this repo, navigate to `momentum/MOMENTUM` and run `npm install` 
5. Lastly, run `npm start`

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
