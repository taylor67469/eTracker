const inquirer = require('inquirer');
const cTable = require('console.table')
const qList = [{
    type: 'list',
    name: 'do',
    message: 'What would you like to do?',
    choices: ['Add departments', 'Add role', 'Add employee', 'View department', 'View role', 'View employee', 'Update employee roles']
}];
const aEmp = [{
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
    type: 'input',
    name: 'role',
    message: 'Whats the employees role id?',
},
{
    type: 'input',
    name: 'eManager',
    message: 'What is the managers id?'
}]
const depart = {
    type: 'input',
    name: 'depart',
    message: 'Please add a department.'
}
const tRole = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your role?',

},
{
    type: 'input',
    name: 'salary',
    message: 'What is the salary?'
},{
    type: 'input',
    name: 'departId',
    message: 'What is the department id?'
}]
const mysql = require('mysql')
const connection = mysql.createConnection(
    {
        host: 'localhost',
        dialect: 'mysql',

        user: 'root',
        password: 'password',
        database: 'eTracker_db',
    }
);
connection.connect((err) => {
    if (err) throw err;
    startOptions();
});
async function startOptions() {
    try {
        const answer = await inquirer.prompt(qList);
        myChoice(answer.do);
    }
    catch (error) {
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
    try {
        const answer = await inquirer.prompt(depart);
        const query = connection.query(
            'INSERT INTO department SET ? ',
            {
                d_name: answer.depart
            },
            (err, res) => {
                if (err) throw err;
            }

        );
        startOptions();
    }
    catch (error) {
        console.log("error");
    }
}
async function aRole() {
    try {
        const answer = await inquirer.prompt(tRole);
        const query = connection.query(
            'INSERT INTO role SET ? ',
            {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departId
            },
            (err, res) => {
                if (err) throw err;
            }

        );
        startOptions();
    }
    catch (error) {
        console.log("error");
    }
}
async function aEmployee() {
    try {
        const answer = await inquirer.prompt(aEmp);
        if(answer.eManager!=null){
        const query = connection.query(
            'INSERT INTO employee SET ? ',
            {
                first_name: answer.firstName,
                last_name: answer.lastName,
                role_id: answer.role,
                manager_id: answer.eManager
            },
            (err, res) => {
                if (err) throw err;
            }

        );
        }
        else{
            const query = connection.query(
                'INSERT INTO employee SET ? ',
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.role,
                },
                (err, res) => {
                    if (err) throw err;
                }
    
            );
        }
        startOptions();
    }
    catch (error) {
        console.log("error");
    }
}
async function vDepartment() {
    connection.query('SELECT * FROM department', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:\n');
        console.table(['name']);
        startOptions();
      });
      
}
async function vRole() {
    connection.query('SELECT * FROM role', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:\n');
        console.table(['title','salary','department_id'],rows);
        startOptions();
      });
}
async function vEmployee() {
    connection.query('SELECT * FROM employee', (err,rows) => {
        if(err) throw err;
      
        console.log('Data received from Db:\n');
        console.table(['first_name', 'last_name','title','department','salary','manager'], rows);
        startOptions();
      });
      
}
