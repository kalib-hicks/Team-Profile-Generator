const inquirer = require("inquirer");
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const GeneratePage = require("../src/page-template");
const { writeFile, copyFile } = require("../utils/generate-site");