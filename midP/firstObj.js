function getBudgets(uwu){
    let sum = 0 ;
    for (let i = 0; i < uwu.length; i++) {
        
        sum += uwu[i].budgets
        
    }
    console.log(sum);
    
    
}



getBudgets([
    {name : "Jhon", age :21, budgets : 23000},
    {name : "Stave", age :32, budgets : 40000},
    {name : "Martin", age :16, budgets : 2700}
])