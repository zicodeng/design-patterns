// Or interface, depending on different situations.
abstract class Employee {
    // Shared by all inherited classes.
    abstract printInfo(): void;
}

// A concrete component that extends the abstract class.
class Manager extends Employee {
    constructor(private name: string, private hobby: string) {
        super();
    }

    printInfo(): void {
        console.log(`Hi, I am ${this.name}. I like ${this.hobby}`);
    }
}

// A concrete component that extends the abstract class.
class Developer extends Employee {
    constructor(private name: string, private hobby: string) {
        super();
    }

    printInfo(): void {
        console.log(`Hola! I am ${this.name}. I like ${this.hobby}`);
    }
}

// A composite made of many components.
class EngTeam extends Employee {
    private members: Employee[] = [];

    constructor() {
        super();
    }

    addMember(member: Employee): void {
        this.members.push(member);
    }

    printInfo(): void {
        this.members.forEach(member => {
            member.printInfo();
        });
    }
}

const manager = new Manager('David', 'fishing');
const developer1 = new Developer('Zico', 'coding');
const developer2 = new Developer('Mike', 'gaming');
const engTeam = new EngTeam();
engTeam.addMember(manager);
engTeam.addMember(developer1);
engTeam.addMember(developer2);
engTeam.printInfo();
