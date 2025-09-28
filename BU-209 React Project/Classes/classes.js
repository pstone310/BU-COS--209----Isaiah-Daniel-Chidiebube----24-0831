class Employee {
    //constructor for the class instance
    constructor(name,occupation) {
        this.name=name;
        this.occupation = occupation;
         

    }

//Method/function
    print() {
        return `Hello, my name is ${this.name} and my occupation is ${this.occupation}.`;
    }
}
//Instantiation
const inst1 = new Employee("Daniel", "software Engineering");

//calling the constructor
console.log(inst1.name);
console.log(inst1.occupation);
console.log(inst1.print())
//Output: Hello, my name is Daniel.