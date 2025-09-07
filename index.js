// Write your solution in this file!

// Initial employee object
const employee = {
  name: "Sam"
};

//  Non-destructive update
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value
  };
}

//Destructive update
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

//Non-destructive delete
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

//Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
} 
