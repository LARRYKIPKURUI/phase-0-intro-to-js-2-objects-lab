// Write your solution in this file!

const employee = {
    name: "John mbugua",
    streetAddress: "123 Main St"
};

// Function to update an employee object non-destructively
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = "Sam"
    employee.streetAddress = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey() {
    const newEmployee = { ...employee };
    delete employee.name;
    delete employee.streetAddress;
    return employee;
}
































































