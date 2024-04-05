// Define an interface for Person
interface IPerson {
    name: string;
    age: number;
    email: string;
}
class Person {
    // Properties
    private name: string;
    private age: number;
    private email: string;

    // Constructor
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email;
    }

    // Methods
    // Getters and Setters
    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getAge(): number {
        return this.age;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    // Other methods
    sayHello(): void {
        console.log("Hello " + this.name + "!!!");
    }
}

const person = new Person("Harry", 29, "harry.chen@ttcglobal.com");
const person1 = new Person("Tom", 31, "Tom.wong@ttcglobal.com");
let people = [person, person1]

people.forEach(person => {
    person.sayHello();
})
