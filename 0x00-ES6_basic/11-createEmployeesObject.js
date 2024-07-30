export default function createEmployeesObject(departmentName, employees) {
  const Employees = new Object()
  Employees.departmentName = departmentName;
  Employees.employees = employees;
  return {[Employees.departmentName]: Employees.employees};
}
