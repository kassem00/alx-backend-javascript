export default function createIteratorObject(report) {
  const ele = [];
  for (const department of Object.keys(report.allEmployees)) {
    for (let nu = 0; nu < report.allEmployees[department].length; nu++) {
      ele.push(report.allEmployees[department][nu]);
    }
  }  
  return ele;
}


