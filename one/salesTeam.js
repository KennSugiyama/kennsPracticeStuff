function SalesTeam(employees){
  this.employees = employees
};



// var sidekicks = [
//     { name: "Robin",     hero: "Batman"   },
//     { name: "Supergirl", hero: "Superman" },
//     { name: "Oracle",    hero: "Batman"   },
//     { name: "Krypto",    hero: "Superman" }
// ];

// var batKicks = sidekicks.filter(function (el) {
//     return (el.hero === "Batman");
// });



SalesTeam.prototype.find = function(name){
  var employee = this.employees.filter(function (el){
    return (el.firstName === name);
  });
  return employee[0]
};




SalesTeam.prototype.topPerformer = function(){
  var orderedEmployees = this.employees.sort(function(small, large){
    return large.totalSales() - small.totalSales()
  })
  return orderedEmployees[0]
}




