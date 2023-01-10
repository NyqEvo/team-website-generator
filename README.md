# Team Website Generator

## Description

This is a CLI program used to create an HTML file based on input from the user. This uses npm packages such as inquirer to store the user data in an object for use, and jest to test our files' functionality. This also contains a simple stylesheet for demonstration purposes. This program was made to simplify the process of storing and visualizing data for the user as well as giving them a website template to use for an info page of sorts.

## Table of Contents

- README file
- index.js: main js file that runs inquirer to recieve user data as well as a function to write the html file
- package.json and package-lock.json: both files are for npm package info
- dist folder: contains stylesheet and will contain the finished html file after user input.
- lib folder: contains one file each for employee, intern, engineer, and manager which defines their javascript class used to organize and reuse each's data
- test folder: contains test files to confirm the functionality of each file in the lib folder
- src folder: file which creates the template for the html to be created. This is imported to the main index.js file to be used during the write file process.

## Links

[Recording of program in use]()