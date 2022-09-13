<!--
<img src="https://raw.githubusercontent.com/mxstbr/react-boilerplate-brand/master/assets/banner-metal.jpg" alt="react boilerplate banner" align="center" />
-->
<br />

<div align="center"><strong>Community Investment and Inclusion Fund Application Form</strong></div>

<br />

<br />

## Development environment

1. Download and install Node.js v6.14.x (e.g. node-v6.14.4-v64.msi) from `https://nodejs.org/en/download/releases/`
2. Install git if needed, for Windows, you may choose to install Git Bash which includes git and a unix-like command line env: `https://gitforwindows.org/`
3. Request an account in our Gitlab server if not yet available
4. Open Git Bash, execute the following commands to setup git:<br />
  `$ git config --global user.name "Your Gitlab Username"`<br />
  `$ git config --global user.email "Your Office Email"`
5. To align coding style, recommend to install the latest version of Visual Studio Code as code editor
6. In the left menu of Visual Studio Code, select Extensions, search and install the following extensions:<br />
  Chinese Translation<br />
  ESLint<br />

## Quick start

1. Open terminal / command prompt
2. This step has to be done once only on the same machine<br />
  For Windows, execute `$ git config --global credential.helper manager`<br/>
  For Linux/Mac, execute `$ git config --global credential.helper cache`
3. Clone this repo using `$ git clone https://gitlab.com/govhk-form-bd/lwb001.git`, enters your gitlab user name and password as needed
4. If you will edit the form, under the `lwb001` directory, run `$ git checkout [BRANCH_NAME]` to change to use the branch as assigned
5. Under the `lwb001` directory, run `$ npm install` to install dependencies  including the reform framework. (this may take several minutes)<br />
   *At this point you can run `$ npm start` to see the sample form at `http://localhost:4000`.*
6. Start editing the form, any new changes would be applied without the need to restart the local server

## Update to use latest reform framework

`$ npm run update`

<!--
## Changes of dependencies or devDependencies

This project uses npm shrinkwrap to fix versions of all dependencies and devDependencies to avoid different build results at different time.
Changes of dependencies may need to run `$ npm shrinkwrap -dev` to update the shrinkwrap json
-->
## Logging level

By default, the logging level is WARN.
`http://localhost:4000/?log=debug` could override the logging level to debug, 
<!--or in browser console, set `console.level = console.DEBUG`-->

<!--
## Documentation

- [Intro](docs/general): What's included and why
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
-->

## License

This project is licensed under the MIT license, Copyright (c) 2016 OGCIO,
Government of HKSAR. For more information see `LICENSE.md`.