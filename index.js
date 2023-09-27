// Define the updateEmployeeWithKeyAndValue function
function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a shallow clone of the employee object
  const updatedEmployee = { ...employee };

  // Update the clone with the new key-value pair
  updatedEmployee[key] = value;

  return updatedEmployee;
}
// Initialize the employee object
const employee = {
  name: 'John',
  age: 30,
};
// First test case: returns an employee with the original key value pairs and the new key value pair
const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, 'salary', 50000);

// Second test case: it does not modify the original employee, but rather returns a clone with the new data
console.log(updatedEmployee1); // This will show the updated employee
console.log(employee); // This will show the original employee, which should remain unchanged

// Modifies the original employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}
// Function to delete a key from a clone of the employee (non-destructive)
function deleteFromEmployeeByKey(employee, key) {
  // Create a clone of the employee object
  const newEmployee = Object.assign({}, employee);
  
  // Delete the key from the clone
  delete newEmployee[key];
  
  return newEmployee;
}
// Function to delete a key from the employee destructively (modifies the original employee)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'age', 35)); // Modifies the original employee
console.log(deleteFromEmployeeByKey(employee, 'department')); // Creates a clone and deletes the key non-destructively
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name')); // Modifies the original employee
