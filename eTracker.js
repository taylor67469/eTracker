const inquirer = require('inquirer');
const Sequelize = require('sequelize');
inquirer = require('inquirer');
const qList = [{
    type: 'list',
    name: 'do',
    message: 'What would you like to do?',
    choices: ['Add departments', 'Add role', 'Add employee', 'View department', 'View role', 'View employee', 'Update employee roles']
}];
async function startOptions() {
    inquirer
    prompt(qList);
    myChoice(data);
}
function myChoice(choice) {
    switch (choice) {
        case 'Add departments':
            aDepartment();
            break;
        case 'Add role':
            aRole();
            break;
        case 'Add employee':
            aEmployee();
            break;
        case 'View department':
            vDepartment();
            break;
        case 'View role':
            vRole();
            break;
        case 'View employee':
            vEmployee();
            break;
        case 'Update employee roles':
            uEmpRoles();
            break;
    }
}
function aDepartment() {

}
function aRole(){

}
function aEmployee(){

}
function vDepartment(){

}
function vRole(){

}
function vEmployee(){

}
function uEmpRoles(){
    
}