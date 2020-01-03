#!/usr/bin/env node
import shell from "shelljs";

import createComponent from "./components/createComponent";
import getReadmeTemplate from "./templates/readmeTemplate";
import getPackageJSONTemplate from "./templates/packageJSONTemplate";
// createComponent();

const initApp = (appName = "my-app") => {
  shell.mkdir(appName);
  shell.cd(appName);
  shell.mkdir("public");
  shell.mkdir("src");
  shell.touch("README.md");
  shell.touch("package.json");
  shell.touch(".gitignore");

  shell.ShellString(getReadmeTemplate()).to("README.md");
  shell.ShellString(getPackageJSONTemplate(appName)).to("package.json");
  shell
    .ShellString(
      `
      node_modules
  `
    )
    .to(".gitignore");

  shell.cd("public");
  shell.cp("../../src/templates/static/favicon.ico", "./");
  shell.cp("../../src/templates/static/index.html", "./");
  shell.cp("../../src/templates/static/manifest.json", "./");
  shell.cp("../../src/templates/static/robots.txt", "./");

  shell.cd("../src");
  createComponent("App", "./");
  shell.cp("../../src/templates/static/index.js", "./");
  shell.cp("../../src/templates/static/index.css", "./");
  shell.cp("../../src/templates/static/App.css", "./");
};
initApp();
/*
lou-cra `app-name`:

Create folder: app-name:

    - xCreate ./public folder with:
        - favicon.ico
        - index.html
        - robots.txt
        - manifest.json

    - xCreate ./src/ with:
        - ./components
            - App
                - App.js
                - App.test.js
                - App.stories.js
                - index.js
        - index.js
        // - setupTests.js
    - xREADME.md
    - xpackage.json
    - gitignore
*/
