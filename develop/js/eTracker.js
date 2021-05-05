const inquirer = require('inquirer');
const qList = [{
    type: 'list',
    name: 'do',
    message: 'What would you like to do?',
    choices: ['Add departments', 'Add role', 'Add employee', 'View department', 'View role', 'View employee', 'Update employee roles']
}];
const aEmp=[{
    type: 'input',
    name: 'firstName',
    message: 'Whats the employees first name?',
},
{
    type: 'input',
    name: 'lastName',
    message: 'Whats the employees last name?',
},
{
    type: 'list',
    name: 'role',
    message: 'Whats the employees role?',
    choices: ['Sales Lead','Sales person','Lead Engineer','Software Engineer','Accountant','Legal Team Lead', 'Lawyer']
},
{
    type: 'input',
    name: 'eManager',
    message: 'Who is the employees manager?'
}]
startOptions();
async function startOptions() {
    try{
    const answer =await inquirer.prompt(qList);
    myChoice(answer.do);
    }
    catch(error){
        console.log("error");
    }
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
async function aDepartment() {
    try{
        const answer =await inquirer.prompt(aEmp);
        console.log(answer);
        }
        catch(error){
            console.log("error");
        }
}
async function aRole(){

}
async function aEmployee(){
    try{
        const answer =await inquirer.prompt(aEmp);
        console.log(answer.role);
        const query = connection.query(
            'INSERT INTO employee SET ?',
            {
              first_name: answer.firstName,
              last_name: answer.lastName,
              role_id: answer.role,
              manager_id: answer.eManager,
            },
            (err, res) => {
              if (err) throw err;
            }
            
          );
        }
        catch(error){
            console.log("error");
        }
}
async function vDepartment(){

}
async function vRole(){

}
async function vEmployee(){

}
async function uEmpRoles(){

}
module.exports = eTracker;