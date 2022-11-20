#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone https://github.com/Saviour1001/nextjs-fevm ${repoName}`;

const installCommand = `cd ${repoName} && npm install`;

console.log("Cloning the repo...");
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) {
  console.log("Error cloning the repo");
  process.exit(1);
}

console.log("Installing dependencies...");
const installed = runCommand(installCommand);
if (!installed) {
  console.log("Error installing dependencies");
  process.exit(1);
}

console.log("Done!");
