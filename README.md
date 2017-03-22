# judo-heroes-2

Universal Javascript sample application with React Router 4 and Express 5 (Enhanced version of https://github.com/lmammino/judo-heroes)

## Setup

```bash
git clone git@github.com:lmammino/judo-heroes-2.git
cd judo-heroes-2
yarn # or `npm i` if not using yarn
```

## Available commands

Available commands to run with `npm run`:

 - `start`: build the production package and run the production server (no universal)
 - `start:universal`: build the production package and run the production server with universal rendering
 - `start:dev`: build the dev package and run the server in dev mode (no universal rendering — auto-restarts on changes)
 - `start:dev:universal`: build the dev package and run the server in dev mode with universal rendering (auto-restarts on changes)
 - `build`: build the production package
 - `build:dev`: build the dev package
 - `build:dev:watch`: build the dev package in watch mode (listen for changes and re-build immediately)
