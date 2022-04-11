function EmployeeList() {
  this.list = [];
}

EmployeeList.prototype.findEmployeeByAccount = function (account) {
  for (let i = 0; i < this.list.length; ++i)
    if (this.list[i].account === account) return i;

  return -1;
};

EmployeeList.prototype.findEmployeeByType = function (type) {
  const arr = [];
  type = type.toLowerCase();
  for (const employee of this.list)
    if (employee.type.toLowerCase().includes(type)) arr.push(employee);

  return arr;
};

// Add employee to employee list
// and return the length of the list
EmployeeList.prototype.add = function (employee) {
  return this.list.push(employee);
};

// Delete employee from employee list
// and return the deleted employee if deletable
EmployeeList.prototype.delete = function (account) {
  const employeeIdx = this.findEmployeeByAccount(account);
  if (employeeIdx === -1) return;

  return this.list.splice(employeeIdx, 1);
};

// Update employee to employee list
EmployeeList.prototype.update = function (employee) {
  const employeeIdx = this.findEmployeeByAccount(employee.account);
  if (employeeIdx === -1) return false;

  this.list[employeeIdx] = employee;
  return true;
};
