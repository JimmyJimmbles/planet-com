# Planet (react app)

## Setup Locally

1. Clone the project into local directory.

```
$ git clone https://github.com/JimmyJimmbles/planet-com.git
```

2. Change Directories into new project folder

```
$ cd planet-com
```

3. Install Assets

```
$ npm install
```

4. Install Assets

```
$ npm install
```

## Front-end Scripts

These are the scripts to build and watch for changes to the front-end assets, like SCSS, JS and image files.

- `$ npm run build` => Builds the app for production.
- `$ npm run watch` => Runs the app in the development mode.<br>The page will reload if you make edits.<br>
- `$ npm run serve` => Runs the app in production mode.

## Workflow

Use this workflow when making any additions or changes to the code.

1. Before creating a new branch be sure to checkout to master and pull all recent changes

- `$ git checkout -b <branch_name>`

2. After making edits or changes run the build process and then stage all changes

- `$ git add -A`

3. Commit changes

- `$ git commit -m "changes for <branch_name>"`

4. Push changes

- `$ git push origin <branch_name>`

If the branch is ready to be merged into master create a pull request for code review.
