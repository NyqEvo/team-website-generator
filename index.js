const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Employee = require('./lib/employee');
const Intern = require('./lib/intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const pageTemplate = require('./src/page-template');

var employeeMembers = [];
var employeeIds= [];

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the intern?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the id of the intern?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the email of the intern?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'What school did the intern go to?',
            name: 'school',
        },
    ]).then(data => employeeMembers.append(new Intern(data.name, data.id, data.email, data.school)))
}