function getUserRole(name, role) {
    switch (role) {
        case 'admin':
            return `${name} is an Admin`;
        case 'manager':
            return `${name} is a Manager`;
        case 'sales_rep':
            return `${name} is a Sales Rep`;
        case 'dept_head':
            return `${name} is a Dept Head`;
        default:
            return `${name} has no role`;
    }
}


//-------------------------------------------------------

var name = "Mike";
var role = "manager";

var result = getUserRole(name, role);
console.log(result);