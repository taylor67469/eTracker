const inquirer = require('inquirer');
//0 sales lead, 1 sales person, 2 lead engineer, 3 software engineer,4 accountant,5 legal team lead, 6 lawyer
const choicesA=['Sales Lead','Sales person','Lead Engineer','Software Engineer','Accountant','Legal Team Lead', 'Lawyer'];
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
    choices: choicesA,
},
{
    type: 'input',
    name: 'eManager',
    message: 'What is the managers id?'
}]
const mysql=require('mysql')
const connection=mysql.createConnection(
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
    user: 'root',
    password:'password',
    database: 'eTracker_db',
  }
);
connection.connect((err) => {
  if (err) throw err;
  startOptions();
});
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
        const theRole= myRole(answer.role);
        const query = connection.query(
            'INSERT INTO employee SET ? ',
            {
              first_name: answer.firstName,
              last_name: answer.lastName,
              role_id: theRole,
              manager_id: answer.eManager
            },
            (err, res) => {
              if (err) throw err;
            }
            
          );
          startOptions();
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
function myRole(role){
    switch (role){
     case 'Sales Lead':
         return 0;
     case 'Sales person':
         return 1;
     case 'Lead Engineer':
         return 2;
     case 'Software Engineer':
         return 3;
     case 'Accountant':
         return 4;
     case 'Legal Team Lead':
         return 5;
     case 'Lawyer':
         return 6;
    }
    
}