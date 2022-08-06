// Block scope 
if(true) {
   const salary = "400000";
   console.log(salary); 
}
console.log(salary);


var my_name = "Mohit"; // Global variable
// Block scope 
if(true) {
   var salary = "400000"; // block scoped variable
   console.log(salary); 
   console.log(my_name); 
}
// console.log(salary); 
console.log(my_name); 


function display() {
    var my_city = "Pune";
    if(true) {
        const my_PIN = 12345; 
        let my_state = "MH";
        var my_country = "India"; 
    }
    // console.log(my_state); 
    // console.log(my_PIN); 
    // console.log(my_city); 
    console.log(my_country); 
}
console.log(my_country); 

display();
