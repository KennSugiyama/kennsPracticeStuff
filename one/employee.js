function Employee(employee) {
  this.firstName = employee.firstName;
  this.sales = employee.sales;
  };


  Employee.prototype.totalSales = function(){
    totalSales = this.sales.reduce(add, 0);
    function add(a, b){
      return a + b;
    };
    return totalSales;
  };


// TRY TO REFACTOR THIS.
  Employee.prototype.averageSales = function(){
    totalSales = this.sales.reduce(add, 0);
    function add(a, b){
      return a + b;
    };
    return totalSales / this.sales.length
  };



