/*eslint-env browser*/

function displayMenu() { /*display menu to the user*/
    "use strict";
    window.console.log("Welcome to the Employee Management System");
    window.console.log("");
    window.console.log("COMMAND MENU");
    window.console.log("show - Show all employees");
    window.console.log("add - Add a new employee");
    window.console.log("del - Delete an existing employee");
    window.console.log("exit - Exit the application");
    window.console.log(""); /*these are blank spaces or lines*/
}

function showEmployees(arr) { //"arr" is a variable you chose, could be something else
    "use strict";
    var i = 1;
    arr.forEach(function (employee) {
        window.console.log(String(i) + ". " + employee);
        i += 1;
    });
    window.console.log("");
}

function addEmployee(arr) {
    "use strict";
    var employee = window.prompt("Enter the employee's name.");
    arr.push(employee);
    window.console.log(employee + " was added.\n");
}

function deleteEmployee(arr) {
    "use strict";
    var num, employee;
    num = parseInt(window.prompt("Employee number to delete."), 10);
    if (num < 1 || num > arr.length) {
        window.alert("Invalid number!");
    } else {
        delete arr[num - 1]; //1 minus 0 to grab the first number in the array (0)
        window.console.log("Employee number " + num + " was deleted.");
    }
} //SLICE could replace or delete employees by name if used in place of "delete"

function main(arr) {
    "use strict";
    var employeeList, command; /*initializing 2 variables*/
    
    displayMenu(); /*to get an idea of what it will look like*/
    
    employeeList = ["Zak Bish",
                   "Sandy Ocha",
                   "Franc Rojas",
                   "Juan Amanth",
                   "Juana Pesti"];
    
    while (true) {
        command = window.prompt("Enter command.");
        if (command !== null) {
            if (command === "show") {
                showEmployees(employeeList);/*pass our array into this function*/
            } else if (command === "add") {
                addEmployee(employeeList);
            } else if (command === "del") {
                deleteEmployee(employeeList);
            } else if (command === "exit") {
                break;
            } else {
                window.console.log("That is not a valid command.");
            }
        } else {
            break;/*application is "done for"*/
        }
    } /*it will be stuck in this loop, until it returns false*/
    window.console.log("Program terminated.");
}
main();